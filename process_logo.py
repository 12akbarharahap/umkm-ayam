import os
import shutil

try:
    input_path = r"c:\laragon\www\umkm-ayam-landing\public\images\logo.png"
    output_path = r"c:\laragon\www\umkm-ayam-landing\src\assets\raw-images\logo.png"
    
    # Just copy it directly so transparency is perfectly preserved without re-encoding
    shutil.copyfile(input_path, output_path)
    print("Copied to", output_path)
    
except Exception as e:
    print("Error:", e)
