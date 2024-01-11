async generateProfilePicture(name): Promise<string> {
  const formattedName = name.split(' ').join('+');
  return `https://ui-avatars.com/api/?name=${formattedName}`;
}