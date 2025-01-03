import os

# Replace this with the absolute path to "Group 11"
group_path = r"C:\Users\andria.DESKTOP-1EU1TK7\Desktop\Group 11"

# List all subfolders in the "Group 11" folder
subfolders = [f for f in os.listdir(group_path) if os.path.isdir(os.path.join(group_path, f))]

for folder in subfolders:
    # Check if the folder name starts with "level"
    if folder.lower().startswith("level"):
        # Extract the number part (last part of the folder name)
        parts = folder.split()
        if len(parts) > 1 and parts[-1].isdigit():
            number = parts[-1]
            new_name = f"level {number.zfill(3)}"  # Pad the number to 3 digits
            os.rename(os.path.join(group_path, folder), os.path.join(group_path, new_name))
            print(f"Renamed '{folder}' to '{new_name}'")
