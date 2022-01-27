window.addEventListener('load', () => {

    let click = 0

    //Menu
    $('#menu').click(() => {
        click +=1
        if(click === 1) {
            $('nav').show()
            $('#menu img').attr('src', 'img/voltar.png')
        } else {
            click = 0
            $('nav').hide()
            $('#menu img').attr('src', 'img/menu.png')
        }
    })

    $(window).resize(() => {
        let largura = document.body.clientWidth;
        largura >= 1024? $('nav').show() : null
    })

    //Scroll do menu
    $('li').click(function (e) {
        const elemento = e.target.className
        switch(elemento) {
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

            case 'donate':
                location.href="../donate.html"
                break;

            default:
                scrollTo(0,0)
                break;
        }
    })

    
    //Slide do banner
    $('.prev').click(() => {
        let img = document.querySelectorAll('.img')
        let src0 = img[0].getAttribute('src')
        let src1 = img[1].getAttribute('src')
        let src2 = img[2].getAttribute('src')

        $(img[0]).attr('src', `${src2}`)
        $(img[1]).attr('src', `${src0}`)
        $(img[2]).attr('src', `${src1}`)
    })

    $('.next').click(() => {
        let img = document.querySelectorAll('.img')
        let src0 = img[0].getAttribute('src')
        let src1 = img[1].getAttribute('src')
        let src2 = img[2].getAttribute('src')
        
        $(img[0]).attr('src', `${src1}`)
        $(img[1]).attr('src', `${src2}`)
        $(img[2]).attr('src', `${src0}`)
    })

    setInterval(() => {
        let img = document.querySelectorAll('.img')
        let src0 = img[0].getAttribute('src')
        let src1 = img[1].getAttribute('src')
        let src2 = img[2].getAttribute('src')
    
        $(img[0]).attr('src', `${src1}`)
        $(img[1]).attr('src', `${src2}`)
        $(img[2]).attr('src', `${src0}`)
    }, 10000)


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
            case 'd1':
                alert('Você será redirecionado para a página de download...')
                location.href="https://github.com/AndersonLeandrog/Android-UTools/releases/tag/v1.4.9"
                break;
                
            case 'd2':
                alert('Fazendo o download da versão 1.3.8, aguarde...')
                location.href="https://github.com/AndersonLeandrog/Android-UTools/releases/tag/v1.3.8"
                break;

            case 'd3':
                alert('Fazendo o download da versão 1.3.7, aguarde...')
                location.href="https://github.com/AndersonLeandrog/Android-UTools/releases/tag/v1.3.7"
                break;

            default:
                alert('Fazendo o download da versão 1.5.0, aguarde...')
                location.href="https://github.com/AndersonLeandrog/Android-UTools/releases/tag/v1.5.0"
                break;
        }
    })
})
