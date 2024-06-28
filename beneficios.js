document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nivel-btn').forEach(button => {
        button.addEventListener('click', function() {
            const nivel = this.getAttribute('data-nivel');
            document.querySelectorAll('.nivel-info').forEach(info => {
                info.classList.remove('active');
            });
            document.querySelector(`.nivel-info.${nivel}`).classList.add('active');
        });
    });
});
