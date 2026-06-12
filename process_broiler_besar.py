import os
from PIL import Image, ImageChops

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

try:
    input_path = r"c:\laragon\www\umkm-ayam-landing\public\images\Ayam Broiler Hidup (Besar).jpg"
    output_path = r"c:\laragon\www\umkm-ayam-landing\src\assets\raw-images\broiler-besar.png"
    im = Image.open(input_path).convert("RGBA")
    
    # Try trimming white borders just in case
    im = trim(im)
    
    # Save as PNG
    im.save(output_path, "PNG")
    print("Converted and moved to", output_path)
    
    # Remove original
    os.remove(input_path)
except Exception as e:
    print("Error:", e)
