import glob
import re

files = glob.glob("*.html")

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace Bilan pédagogique
    content = re.sub(
        r'href="#"([^>]*>\s*Bilan\s*pédagogique\s*</a>)',
        r'href="https://mathconsult-niort.fr/contact/#contact"\1',
        content,
        flags=re.IGNORECASE
    )
    
    # Replace Nos stages
    content = re.sub(
        r'href="#"([^>]*>\s*Nos\s*stages\s*</a>)',
        r'href="https://mathconsult-niort.fr/stages/"\1',
        content,
        flags=re.IGNORECASE
    )
    
    # Replace Être rappelé(e)
    content = re.sub(
        r'href="#"([^>]*>\s*Être\s*rappelé\(e\)\s*</a>)',
        r'href="https://mathconsult-niort.fr/contact/#contact"\1',
        content,
        flags=re.IGNORECASE
    )
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
