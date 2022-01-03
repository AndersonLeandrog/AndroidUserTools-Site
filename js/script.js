var script = document.createElement('script')
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js'
script.type = 'text/javascript'
document.getElementsByTagName('head')[0].appendChild(script)

window.addEventListener('load', () => {

    //Scroll do menu
    $('li').click(function (e) {
        const elemento = e.target.className
        switch(elemento) {
            case 'inicio':
                scrollTo(0,0)
                break;

            case 'sobre':
                scrollTo(0,268)
                break;

            case 'screenshot':
                scrollTo(0,800)
                break;

            case 'versao':
                scrollTo(0,1320)
                break;

            case 'comoUsar':
                scrollTo(0,2000)
                break;
        }
    })

    
    //Slide do banner
    let click = 0
    $('.before').click(() => {
        click += 1
        if(click === 1) {
            $('.slide_img').attr('src', 'img/screenshot_2.png')
        } else if(click === 2){
            $('.slide_img').attr('src', 'img/screenshot_3.png')
        } else if(click === 3){
            $('.slide_img').attr('src', 'img/screenshot_4.png') 
        } else {
            click = 0
            $('.slide_img').attr('src', 'img/screenshot_1.png')
        }
    })

    function atualizarSlide() {
        let iteracao = 1
        const rodar = setInterval(() => {
            iteracao += 1
            iteracao > 4? iteracao = 1 : $('.slide_img').attr('src', `img/screenshot_${iteracao}.png`)
        }, 10000)

        $('.before').mousemove(() => {
            clearInterval(rodar)
            $('.slide_img').attr('src', `img/screenshot_1.png`)
        }) 

        $('.before').mouseleave(() => {
             atualizarSlide()
        })
    }

    atualizarSlide()


    //Seleção, download das versões
    $('.download').click(() => {
        const versao = document.getElementById('ver')
        const valor = versao.options[versao.selectedIndex].value

        switch(valor) {
            case 'd2':
                alert('Fazendo o download da versão 1.3.8, aguarde...')
                location.href="https://github.com/AndersonLeandrog/Android-UTools/releases/tag/v1.3.8"
                break;

            case 'd3':
                alert('Fazendo o download da versão 1.3.7, aguarde...')
                location.href="https://github.com/AndersonLeandrog/Android-UTools/releases/tag/v1.3.7"
                break;

            default:
                alert('Você será redirecionado para a página de download...')
                location.href="https://github.com/AndersonLeandrog/Android-UTools/releases/tag/v1.4.9"
                break;
        }
    })
})
