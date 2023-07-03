$(document).ready(function () {
    // Vetor de imagens e descrições
    const imagens = [
        {
            name        : 'TytoinKids_01.png',
            descricao   : 'TytoinKids_01',
            titulo      : 'Tytoin Kids'
        },
        {
            name        : 'TytoinKids_04.png',
            descricao   : 'TytoinKids_04',
            titulo      : 'Tytoin Kids'
        },
        {
            name        : 'TytoinKids_05.png',
            descricao   : 'TytoinKids_05',
            titulo      : 'Tytoin Kids'
        },
        {
            name        : 'simulador_erros_equipe_02.png',
            descricao   : 'simulador_erros_equipe_02',
            titulo      : 'Simulador de erros'
        },
        {
            name        : 'simulador_erros_equipe_03.png',
            descricao   : 'simulador_erros_equipe_03',
            titulo      : 'Simulador de erros'
        },
        {
            name        : 'simulador_erros_equipe_04.png',
            descricao   : 'simulador_erros_equipe_04',
            titulo      : 'Simulador de erros'
        },
        {
            name        : 'MegaSucata_01.png',
            descricao   : 'MegaSucata_01',
            titulo      : 'Mega Sucata'
        },
        {
            name        : 'MegaSucata_02.png',
            descricao   : 'MegaSucata_02',
            titulo      : 'Mega Sucata'
        },
        {
            name        : 'MegaSucata_03.png',
            descricao   : 'MegaSucata_03',
            titulo      : 'Mega Sucata'
        },
        {
            name        : 'DWR_01.png',
            descricao   : 'DWR_01',
            titulo      : 'Insumos farmaceuticos'
        },
        {
            name        : 'DWR_04.png',
            descricao   : 'DWR_04',
            titulo      : 'Insumos farmaceuticos'
        },
        {
            name        : 'DWR_05.png',
            descricao   : 'DWR_05',
            titulo      : 'Insumos farmaceuticos'
        },
        {
            name        : 'Avanca01.png',
            descricao   : 'Avanca01',
            titulo      : 'Avanca Mais'
        },
        {
            name        : 'Avanca02.png',
            descricao   : 'Avanca02',
            titulo      : 'Avanca Mais'
        },
        {
            name        : 'Avanca03.png',
            descricao   : 'Avanca03',
            titulo      : 'Avanca Mais'
        },
        {
            name        : 'Avanca04.png',
            descricao   : 'Avanca04',
            titulo      : 'Avanca Mais'
        },
        {
            name        : 'Avanca05.png',
            descricao   : 'Avanca05',
            titulo      : 'Avanca Mais'
        },
        {
            name        : 'Avanca06.png',
            descricao   : 'Avanca06',
            titulo      : 'Avanca Mais'
        },
    ];

    function createModal(imagem, i, imagesElement) {
        // Criação do elemento div principal
        var divElement = document.createElement("div");
        divElement.classList.add("portfolio-modal", "modal", "fade");
        divElement.setAttribute("id", "portfolioModal" + i);
        divElement.setAttribute("tabindex", "-1");
        divElement.setAttribute("aria-labelledby", "portfolioModal" + i);
        divElement.setAttribute("aria-hidden", "true");

        // Criação do elemento div da modal-dialog
        var dialogDivElement = document.createElement("div");
        dialogDivElement.classList.add("modal-dialog", "modal-xl");

        // Criação do elemento div da modal-content
        var contentDivElement = document.createElement("div");
        contentDivElement.classList.add("modal-content");

        // Criação do elemento div da modal-header
        var headerDivElement = document.createElement("div");
        headerDivElement.classList.add("modal-header", "border-0");

        // Criação do botão de fechar
        var closeButtonElement = document.createElement("button");
        closeButtonElement.classList.add("btn-close");
        closeButtonElement.setAttribute("type", "button");
        closeButtonElement.setAttribute("data-bs-dismiss", "modal");
        closeButtonElement.setAttribute("aria-label", "Close");

        // Adicionando o botão de fechar ao elemento div da modal-header
        headerDivElement.appendChild(closeButtonElement);

        // Criação do elemento div da modal-body
        var bodyDivElement = document.createElement("div");
        bodyDivElement.classList.add("modal-body", "text-center", "pb-5");

        // Criação do elemento div do container
        var containerDivElement = document.createElement("div");
        containerDivElement.classList.add("container");

        // Criação do elemento div da row
        var rowDivElement = document.createElement("div");
        rowDivElement.classList.add("row", "justify-content-center");

        // Criação do elemento div da col-lg-8
        var colDivElement = document.createElement("div");
        colDivElement.classList.add("col-lg-8");

        // Criação do elemento h2 do título
        var titleElement = document.createElement("h2");
        titleElement.classList.add("portfolio-modal-title", "text-secondary", "text-uppercase", "mb-0");
        titleElement.textContent = `${imagem.titulo}`;

        // Criação do elemento div da linha do ícone
        var dividerCustomElement = document.createElement("div");
        dividerCustomElement.classList.add("divider-custom");

        // Criação dos elementos div da linha do ícone
        var dividerLine1Element = document.createElement("div");
        dividerLine1Element.classList.add("divider-custom-line");
        var dividerLine2Element = document.createElement("div");
        dividerLine2Element.classList.add("divider-custom-icon");
        var dividerLine3Element = document.createElement("div");
        dividerLine3Element.classList.add("divider-custom-line");

        // Criação do elemento i do ícone
        var iconElement = document.createElement("i");
        iconElement.classList.add("fas", "fa-star");

        // Adicionando os elementos div e i à linha do ícone
        dividerCustomElement.appendChild(dividerLine1Element);
        dividerCustomElement.appendChild(dividerLine2Element);
        dividerCustomElement.appendChild(dividerLine3Element);
        dividerLine2Element.appendChild(iconElement);

        // Criação do elemento img da imagem
        var imgElement = document.createElement("img");
        imgElement.classList.add("img-fluid", "rounded", "mb-5");
        imgElement.setAttribute("src", `assets/img/portfolio/${imagem.name}`);
        imgElement.setAttribute("alt", `${imagem.descricao}`);

        // Criação do elemento p do texto
        var textElement = document.createElement("p");
        textElement.classList.add("mb-4");
        textElement.textContent = `${imagem.descricao}`;

        // Criação do botão de fechar janela
        var closeButton = document.createElement("button");
        closeButton.classList.add("btn", "btn-primary");
        closeButton.setAttribute("data-bs-dismiss", "modal");
        closeButton.innerHTML = '<i class="fas fa-xmark fa-fw"></i> Fechar janela';

        // Adicionando os elementos ao documento HTML
        bodyDivElement.appendChild(containerDivElement);
        containerDivElement.appendChild(rowDivElement);
        rowDivElement.appendChild(colDivElement);
        colDivElement.appendChild(titleElement);
        colDivElement.appendChild(dividerCustomElement);
        colDivElement.appendChild(imgElement);
        colDivElement.appendChild(textElement);
        colDivElement.appendChild(closeButton);

        contentDivElement.appendChild(headerDivElement);
        contentDivElement.appendChild(bodyDivElement);

        dialogDivElement.appendChild(contentDivElement);

        divElement.appendChild(dialogDivElement);

        // Adicionando a div ao elemento pai
        imagesElement.appendChild(divElement);

    }

    function createDivCarousel(imagem, i, imagesElement) {
        // Criação do elemento div
        var divElement = document.createElement("div");
        divElement.classList.add("portfolio-item", "mx-auto");
        divElement.setAttribute("data-bs-toggle", "modal");
        divElement.setAttribute('data-bs-target', '#portfolioModal' + i);

        // Criação do elemento div para a legenda
        var captionDivElement = document.createElement("div");
        captionDivElement.classList.add("portfolio-item-caption", "d-flex", "align-items-center", "justify-content-center", "h-100", "w-100");

        // Criação do elemento div para o conteúdo da legenda
        var captionContentDivElement = document.createElement("div");
        captionContentDivElement.classList.add("portfolio-item-caption-content", "text-center", "text-white");

        // Criação do elemento svg para o ícone
        var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgElement.classList.add("svg-inline--fa", "fa-plus", "fa-3x");
        svgElement.setAttribute("aria-hidden", "true");
        svgElement.setAttribute("focusable", "false");
        svgElement.setAttribute("data-prefix", "fas");
        svgElement.setAttribute("data-icon", "plus");
        svgElement.setAttribute("role", "img");
        svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svgElement.setAttribute("viewBox", "0 0 448 512");
        svgElement.setAttribute("data-fa-i2svg", "");

        // Criação do elemento path para o ícone
        var pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
        pathElement.setAttribute("fill", "currentColor");
        pathElement.setAttribute("d", "M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z");

        // Adicionando o elemento path ao elemento svg
        svgElement.appendChild(pathElement);

        // Adicionando o elemento svg ao elemento div do conteúdo da legenda
        captionContentDivElement.appendChild(svgElement);

        // Adicionando o elemento div do conteúdo da legenda ao elemento div da legenda
        captionDivElement.appendChild(captionContentDivElement);

        // Adicionando o elemento div da legenda ao elemento div principal
        divElement.appendChild(captionDivElement);

        // Criação do elemento img
        var imgElement = document.createElement("img");
        imgElement.classList.add("img-fluid");
        imgElement.setAttribute("src", `assets/img/portfolio/${imagem.name}`);
        imgElement.setAttribute("alt", `${imagem.descricao}`);

        // Adicionando o elemento img ao elemento div principal
        divElement.appendChild(imgElement);

        // Adicionando a div ao elemento pai
        imagesElement.appendChild(divElement);

    }

    function imagesCarousel() {
        // Inserindo imagens no elemento com a classe "carousel-imagess"
        var imagesElement = document.querySelector('.carousel-images');

        // Inserindo imagens no elemento com a classe "modais-js"
        var modaisElement = document.querySelector('.modais-js');

        // Percorrendo o objeto usando for...in
        var i = 1;
        for (var chave in imagens) {
            if (imagens.hasOwnProperty(chave)) {
                var imagem = imagens[chave];
                
                createDivCarousel(imagem, i, imagesElement);
                createModal(imagem, i, modaisElement);

                i++;
            }
        }
    }

    imagesCarousel();

    $('.carousel').slick({
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});