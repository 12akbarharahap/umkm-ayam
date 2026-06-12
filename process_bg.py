import os
from PIL import Image

try:
    input_path = r"c:\laragon\www\umkm-ayam-landing\public\images\bg-ayam.jpeg"
    output_path = r"c:\laragon\www\umkm-ayam-landing\src\assets\raw-images\bg-ayam.png"
    im = Image.open(input_path).convert("RGBA")
    
    # Save as PNG
    im.save(output_path, "PNG")
    print("Converted and moved to", output_path)
    
    # Remove original
    os.remove(input_path)
except Exception as e:
    print("Error:", e)
