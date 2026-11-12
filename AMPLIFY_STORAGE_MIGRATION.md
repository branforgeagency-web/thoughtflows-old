# AWS Amplify Storage Media Migration

All image and video imports in `src/` have been switched to resolve from AWS Amplify Storage via `src/config/media.js` (`mediaUrl()`), controlled by `REACT_APP_MEDIA_BASE_URL`.

## Configuration

- **Bucket**: `amplify-d16vhnu5amcbsu-ma-thoughtflowsstoragebucke-0tvgcluheq7z`
- **Region**: `ap-south-1`
- **Key Prefix**: `media/`
- **Environment variable** (`.env` / `.env.example` / Amplify Hosting):
  ```env
  REACT_APP_MEDIA_BASE_URL=https://amplify-d16vhnu5amcbsu-ma-thoughtflowsstoragebucke-0tvgcluheq7z.s3.ap-south-1.amazonaws.com/media
  ```
  *(If you front the bucket with CloudFront, set `REACT_APP_MEDIA_BASE_URL` to your CloudFront URL + `/media`.)*

## 1. Upload Media Files to Amplify Storage

A complete manifest is generated at `scripts/media-manifest.json`:
- **Referenced in code**: 541 files (~379.49 MB)
- **All media in `src/images/` + referenced**: 1,013 files (~745.8 MB)

The upload script sets exact `Content-Type` headers (including extensionless files in `src/images/placements/`, which are detected via file magic bytes).

```powershell
# Preview referenced files first
.\scripts\upload-media-to-amplify.ps1 -ReferencedOnly -DryRun

# Upload only files actively referenced in the app (~379 MB)
.\scripts\upload-media-to-amplify.ps1 -ReferencedOnly

# Or upload all 1,013 files (~746 MB)
.\scripts\upload-media-to-amplify.ps1
```

## 2. S3 Bucket Permissions & CORS

1. **Public Read Access** for `media/*` (either via Amplify Gen 2 `defineStorage` `allow.guest.to(['read'])` on `media/*`, or S3 Bucket Policy allowing `s3:GetObject` on `arn:aws:s3:::amplify-d16vhnu5amcbsu-ma-thoughtflowsstoragebucke-0tvgcluheq7z/media/*`).
2. **CORS Policy** (required for WebGL/Canvas components like `LiquidWaterHero.jsx` and `InfiniteGallery.js`):
   ```json
   [
     {
       "AllowedHeaders": ["*"],
       "AllowedMethods": ["GET", "HEAD"],
       "AllowedOrigins": ["*"],
       "ExposeHeaders": ["ETag"],
       "MaxAgeSeconds": 3600
     }
   ]
   ```
