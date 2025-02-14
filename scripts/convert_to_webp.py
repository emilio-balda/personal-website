#!/usr/bin/env python3

import os
from PIL import Image

def convert_png_to_webp(root_directory, quality=90):
    """
    Recursively converts all PNG images under `root_directory` to WebP format.
    
    :param root_directory: The base directory to scan for PNG images.
    :param quality: Quality setting for the WebP conversion (0-100).
    """
    for subdir, dirs, files in os.walk(root_directory):
        for filename in files:
            if filename.lower().endswith(".png"):
                png_path = os.path.join(subdir, filename)
                webp_path = os.path.splitext(png_path)[0] + ".webp"
                
                print(f"Converting: {png_path} -> {webp_path}")
                
                # Open the image and convert
                with Image.open(png_path) as img:
                    # If the image has an alpha channel, it will be preserved by default
                    img.save(webp_path, "WEBP", quality=quality)
                
                # If you want to remove the original PNG, uncomment the line below:
                # os.remove(png_path)

if __name__ == "__main__":
    directory_to_convert = input("Enter the path to the directory containing PNG files: ").strip()
    
    if os.path.isdir(directory_to_convert):
        convert_png_to_webp(directory_to_convert, quality=80)
        print("Conversion completed.")
    else:
        print("Invalid directory path provided.")
