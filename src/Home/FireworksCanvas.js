import React, { useEffect, useRef } from 'react'

// Realistic fireworks: rockets rise with a spark trail, burst into particles that
// fall under gravity with air drag, glowing trails, twinkle and crackle.
const PALETTES = [
    ['#ffd98a', '#fff3c4', '#ffb347'], // gold
    ['#ffffff', '#e6fbfd', '#9be7ee'], // silver-white
    ['#15AEBB', '#5fd6df', '#e6fbfd'], // teal
    ['#ff8a5c', '#ffd98a', '#fff3c4'], // warm orange
    ['#c9a6ff', '#ffffff', '#ffd98a'], // violet + gold
]

const rand = (a, b) => a + Math.random() * (b - a)

const FireworksCanvas = ({ minX = 0.45, maxX = 0.9 }) => {
    const ref = useRef(null)

    useEffect(() => {
        const canvas = ref.current
        if (!canvas) return undefined
        const ctx = canvas.getContext('2d')
        const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduce) return undefined

        let w = 0
        let h = 0
        let raf = 0
        let last = performance.now()
        let nextLaunch = 300
        const rockets = []
        const particles = []

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2)
            const rect = canvas.getBoundingClientRect()
            w = rect.width
            h = rect.height
            canvas.width = Math.round(w * dpr)
            canvas.height = Math.round(h * dpr)
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
        }
        resize()
        const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null
        if (ro) ro.observe(canvas)
        else window.addEventListener('resize', resize)

        const launch = () => {
            const x = rand(minX, maxX) * w
            const targetY = rand(0.12, 0.42) * h
            const vy = -Math.sqrt(2 * 0.12 * (h - targetY)) // reach target under gravity
            rockets.push({ x, y: h + 10, trail: [], vx: rand(-0.6, 0.6), vy, palette: PALETTES[(Math.random() * PALETTES.length) | 0] })
        }

        const explode = (r) => {
            const type = Math.random()
            const count = w < 600 ? 80 : 150
            const base = rand(4.2, 6.4)
            for (let i = 0; i < count; i++) {
                const a = (Math.PI * 2 * i) / count + rand(-0.05, 0.05)
                // peony = even sphere, willow = slower heavy fall, ring = uniform speed
                const sp = type < 0.2 ? base : base * Math.pow(Math.random(), 0.45)
                particles.push({
                    x: r.x,
                    y: r.y,
                    hist: [],
                    vx: Math.cos(a) * sp,
                    vy: Math.sin(a) * sp,
                    life: 1,
                    decay: type > 0.8 ? rand(0.006, 0.009) : rand(0.009, 0.014),
                    drag: type > 0.8 ? 0.975 : 0.955,
                    color: r.palette[(Math.random() * r.palette.length) | 0],
                    size: rand(1.6, 2.8),
                    crackle: Math.random() < 0.25,
                })
            }
            // bright flash core
            particles.push({ x: r.x, y: r.y, vx: 0, vy: 0, life: 1, decay: 0.08, drag: 1, color: '#ffffff', size: 18, flash: true })
        }

        const frame = (now) => {
            const dt = Math.min((now - last) / 16.67, 3)
            last = now

            // clear each frame; trails come from each particle's stored history
            ctx.globalCompositeOperation = 'source-over'
            ctx.clearRect(0, 0, w, h)
            ctx.globalCompositeOperation = 'lighter'

            nextLaunch -= dt * 16.67
            if (nextLaunch <= 0) {
                launch()
                if (Math.random() < 0.3) setTimeout(launch, 180)
                nextLaunch = rand(900, 1700)
            }

            // rockets
            for (let i = rockets.length - 1; i >= 0; i--) {
                const r = rockets[i]
                r.trail.push([r.x, r.y])
                if (r.trail.length > 10) r.trail.shift()
                r.vy += 0.12 * dt
                r.x += r.vx * dt
                r.y += r.vy * dt
                const t0 = r.trail[0]
                const rg = ctx.createLinearGradient(t0[0], t0[1], r.x, r.y)
                rg.addColorStop(0, 'rgba(255, 210, 140, 0)')
                rg.addColorStop(1, 'rgba(255, 240, 200, 0.95)')
                ctx.strokeStyle = rg
                ctx.lineWidth = 2.2
                ctx.lineCap = 'round'
                ctx.beginPath()
                ctx.moveTo(t0[0], t0[1])
                ctx.lineTo(r.x, r.y)
                ctx.stroke()
                ctx.fillStyle = '#fff6dc'
                ctx.beginPath()
                ctx.arc(r.x, r.y, 1.8, 0, Math.PI * 2)
                ctx.fill()
                // little sparks falling off the rocket
                if (Math.random() < 0.6) {
                    particles.push({ x: r.x, y: r.y, vx: rand(-0.4, 0.4), vy: rand(0.2, 1), life: 0.6, decay: 0.04, drag: 0.96, color: '#ffcf7a', size: 1 })
                }
                if (r.vy >= -0.5) {
                    explode(r)
                    rockets.splice(i, 1)
                }
            }

            // particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i]
                if (p.hist) {
                    p.hist.push([p.x, p.y])
                    if (p.hist.length > 16) p.hist.shift()
                }
                p.vx *= Math.pow(p.drag, dt)
                p.vy = p.vy * Math.pow(p.drag, dt) + 0.045 * dt
                p.x += p.vx * dt
                p.y += p.vy * dt
                p.life -= p.decay * dt
                if (p.life <= 0) {
                    particles.splice(i, 1)
                    continue
                }

                if (p.flash) {
                    const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
                    g.addColorStop(0, `rgba(255,255,255,${p.life * 0.9})`)
                    g.addColorStop(1, 'rgba(255,255,255,0)')
                    ctx.fillStyle = g
                    ctx.beginPath()
                    ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
                    ctx.fill()
                    continue
                }

                // twinkle near end of life
                let alpha = p.life
                if (p.life < 0.35) alpha *= Math.random() < 0.5 ? 1 : 0.2
                if (p.crackle && p.life < 0.25 && Math.random() < 0.15) {
                    ctx.fillStyle = `rgba(255,255,255,${alpha})`
                    ctx.fillRect(p.x - 1.5, p.y - 1.5, 3, 3)
                }

                ctx.lineCap = 'round'
                if (p.hist && p.hist.length > 1) {
                    // tapered tail: older segments thinner and fainter
                    const n = p.hist.length
                    for (let k = 1; k < n; k++) {
                        const f = k / n
                        ctx.globalAlpha = alpha * f * 0.85
                        ctx.strokeStyle = p.color
                        ctx.lineWidth = p.size * f
                        ctx.beginPath()
                        ctx.moveTo(p.hist[k - 1][0], p.hist[k - 1][1])
                        ctx.lineTo(p.hist[k][0], p.hist[k][1])
                        ctx.stroke()
                    }
                    ctx.beginPath()
                    ctx.moveTo(p.hist[n - 1][0], p.hist[n - 1][1])
                    ctx.lineTo(p.x, p.y)
                    ctx.globalAlpha = alpha
                    ctx.lineWidth = p.size
                    ctx.stroke()
                }
                // bright glowing head
                ctx.globalAlpha = alpha * 0.35
                ctx.fillStyle = p.color
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size * 2.6, 0, Math.PI * 2)
                ctx.fill()
                ctx.globalAlpha = alpha
                ctx.fillStyle = '#ffffff'
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2)
                ctx.fill()
                ctx.globalAlpha = 1
            }

            raf = requestAnimationFrame(frame)
        }

        const onVis = () => {
            if (document.hidden) cancelAnimationFrame(raf)
            else {
                last = performance.now()
                raf = requestAnimationFrame(frame)
            }
        }
        document.addEventListener('visibilitychange', onVis)
        raf = requestAnimationFrame(frame)

        return () => {
            cancelAnimationFrame(raf)
            document.removeEventListener('visibilitychange', onVis)
            if (ro) ro.disconnect()
            else window.removeEventListener('resize', resize)
        }
    }, [minX, maxX])

    return <canvas ref={ref} className='tf-dv-canvas' aria-hidden='true' />
}

export default FireworksCanvas
