"""Extract base64 images from Stitch HTML files and save as PNG files."""
import re
import base64
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), 'images')
os.makedirs(OUTPUT_DIR, exist_ok=True)

def extract_images(html_file, prefix):
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all base64 image sources and their alt text
    pattern = r'alt="([^"]*)"[^>]*src="data:image/(png|jpeg|jpg|webp);base64,([A-Za-z0-9+/=\s]+)"'
    matches = re.findall(pattern, content, re.DOTALL)
    
    if not matches:
        # Try alternate pattern where src comes before alt
        pattern = r'src="data:image/(png|jpeg|jpg|webp);base64,([A-Za-z0-9+/=\s]+)"[^>]*alt="([^"]*)"'
        matches_alt = re.findall(pattern, content, re.DOTALL)
        matches = [(m[2], m[0], m[1]) for m in matches_alt]
    
    print(f"Found {len(matches)} images in {html_file}")
    
    saved = []
    for i, (alt, fmt, data) in enumerate(matches):
        # Clean base64 data
        clean_data = data.replace('\n', '').replace('\r', '').replace(' ', '')
        
        # Generate filename from alt text
        safe_name = re.sub(r'[^a-zA-Z0-9]', '_', alt)[:50].strip('_').lower()
        if not safe_name:
            safe_name = f"image_{i}"
        filename = f"{prefix}_{i+1}_{safe_name}.{fmt}"
        filepath = os.path.join(OUTPUT_DIR, filename)
        
        try:
            img_data = base64.b64decode(clean_data)
            with open(filepath, 'wb') as f:
                f.write(img_data)
            print(f"  Saved: {filename} ({len(img_data)} bytes) - alt: {alt[:60]}")
            saved.append((filename, alt))
        except Exception as e:
            print(f"  Error saving {filename}: {e}")
    
    return saved

print("Extracting from homepage...")
home_images = extract_images('stitch_homepage.html', 'home')

print("\nExtracting from gallery...")
gallery_images = extract_images('stitch_gallery.html', 'gallery')

print(f"\nDone! {len(home_images)} home images, {len(gallery_images)} gallery images")
