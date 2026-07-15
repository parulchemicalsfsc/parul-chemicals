import re

files = ['nextapp/components/CareerForm.tsx', 'nextapp/components/FSCareerForm.tsx']
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove ' required' or 'required ' in input, select, textarea tags
    content = re.sub(r'(<(?:input|select|textarea)\b[^>]*?)\s+required(?=[\s>])', r'\1', content)
    
    # Remove ' *' before </label>
    content = re.sub(r'\s*\*(?=</label>)', '', content)
    
    # Fix the specific array string 'Resume *'
    content = content.replace("'Resume *'", "'Resume'")
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print('Done!')
