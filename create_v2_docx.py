import sys
import os

try:
    import docx
except ImportError:
    print("Installing python-docx...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "python-docx"])
    import docx

from docx.shared import Pt, Inches
from docx.enum.text import WD_PARAGRAPH_ALIGNMENT

def create_doc(docx_path):
    doc = docx.Document()
    
    # Title
    title = doc.add_heading('COSMONET AI \nVersion 2: Clean Humanized UI/UX Design Mockups', 0)
    title.alignment = WD_PARAGRAPH_ALIGNMENT.CENTER
    
    intro = doc.add_paragraph("This version features a much cleaner, light background design focused on a realistic, professional, and corporate human-centric aesthetic.")
    intro.alignment = WD_PARAGRAPH_ALIGNMENT.CENTER
    doc.add_page_break()
    
    # List of generated V2 images
    base_dir = r"C:\Users\Admin\.gemini\antigravity\brain\ff94b4d6-4acb-4e8b-8287-7b0470899156"
    
    sections = [
        ("1. Hero Banner & Navigation (Light Theme)", "v2_hero_mockup_1773411864961.png"),
        ("2. Services Grid & Metrics Data", "v2_services_mockup_1773411884789.png"),
        ("3. About Us & Why Choose Us Features", "v2_about_mockup_1773411903603.png"),
        ("4. Contact Form & Dark Navy Footer", "v2_footer_mockup_1773411922174.png")
    ]
    
    for title_text, img_name in sections:
        # Add heading
        h = doc.add_heading(title_text, level=1)
        
        # Add Image
        img_path = os.path.join(base_dir, img_name)
        try:
            if os.path.exists(img_path):
                # Add picture scaled to 6 inches wide to fit on a standard page
                doc.add_picture(img_path, width=Inches(6.0))
                cap = doc.add_paragraph(f"Mockup for: {title_text.split('.')[1].strip()}")
                cap.alignment = WD_PARAGRAPH_ALIGNMENT.CENTER
                cap.style = 'Caption'
            else:
                doc.add_paragraph(f"[Image not found at path: {img_path}]")
        except Exception as e:
            doc.add_paragraph(f"[Error inserting image: {str(e)}]")
            
        doc.add_page_break()
            
    doc.save(docx_path)
    print(f"Version 2 Design Document saved successfully at: {docx_path}")

if __name__ == "__main__":
    docx_file = r"d:\cosmonet-ai\Cosmonet_AI_UIUX_Plan_V2.docx"
    create_doc(docx_file)
