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
    path = r"c:\laragon\www\umkm-ayam-landing\src\assets\raw-images\doc-petelur-betina.png"
    im = Image.open(path)
    trimmed_im = trim(im)
    trimmed_im.save(path)
    print("Trimmed successfully.")
except Exception as e:
    print("Error:", e)
