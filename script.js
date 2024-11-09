// Função para alternar a exibição da categoria
function toggleCategory(categoryId) {
    const category = document.getElementById(categoryId);
    category.style.display = category.style.display === 'none' ? 'block' : 'none';
  }
  
  // Função para buscar documentos (simplificado)
  function searchDocuments() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const items = document.querySelectorAll(".document-item");
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? '' : 'none';
    });
  }
  
  // Funções de visualização e download
  function viewDocument(docName) {
    alert("Visualizando " + docName);
    // Adicione a lógica de visualização aqui
  }
  
  function downloadDocument(docName) {
    alert("Baixando " + docName);
    // Adicione a lógica de download aqui
  }
  document.getElementById('salvar').addEventListener('click', function() {
    const descricao = document.getElementById('descricao').value;
    const data = document.getElementById('data').value;
    const local = document.getElementById('local').value;
    const horario = document.getElementById('horario').value;

    console.log('Descrição:', descricao);
    console.log('Data:', data);
    console.log('Local:', local);
    console.log('Horário:', horario);

    alert('Evento salvo com sucesso!');
});
function previewImage(event) {
    const imagePreview = document.getElementById('imagePreview');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block'; // Mostrar a miniatura
    }

    if (file) {
        reader.readAsDataURL(file); // Lê a imagem como URL
    }
}