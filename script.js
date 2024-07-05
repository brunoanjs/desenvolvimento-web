function mostrarConteudo(id) {
    // Esconder todas as seções
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar apenas a seção com o ID correspondente
    document.getElementById(id).style.display = 'block';
}
