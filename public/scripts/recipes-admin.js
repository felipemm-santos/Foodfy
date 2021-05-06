const RecipeLinks = document.querySelectorAll('.card .description a');

for (let linkIndex = 0; linkIndex < RecipeLinks.length; linkIndex++) {
  const link = RecipeLinks[linkIndex]

  link.addEventListener('click', () => {
    window.location.href = `/admin/recipes/${linkIndex}`;    
  });  
}
