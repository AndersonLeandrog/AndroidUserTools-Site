var script = document.createElement('script')
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js'
script.type = 'text/javascript'
document.getElementsByTagName('head')[0].appendChild(script)

window.addEventListener('load', () => {

    let largura = window.innerWidth
    if(largura > 1024) {
        const div = $('<div></div>')
        .html(`
            Atenção, clicando em 'aceitar' você concorda que:
            <br><br>
            1. Possui ciência do programa e que em caso de má utilização 
            ou problemas com o seu aparelho tais como, hardbrick, softbrick,
            travamentos ou afins, nós do site não nos responsabilizamos por isso.
            <br><br>
            2. Algumas versões do programa, principalmente as mais antigas podem,
            apresentar bugs não relatados e isso pode causar um dos problemas relatados
            anteriormente, utilize por sua conta em risco. 
            <br><br>
            3. Não oferecemos suporte para problemas relatados via e-mail ou qualquer outra
            rede social, caso possua algum problema que queira relatar o usuário deverá fazer
            isso via <a href="https://github.com/AndersonLeandrog/Android-UTools">github</a>,
            através da página do projeto abrindo uma nova 'issue'.
            <br><br>
            4. O Programa apesar de funcionar na maioria dos dispositivos android, foi testado
            até o android 10 e pode apresentar instabilidades ou pode não funcionar muito bem
            em versões superiores ou versões muito antigas.
            <br><br>
            5. Dentre as marcas de celulares que já foram testadas e comprovadas estão, Motorola,
            Samsung, Xiaomi, LG e Sony. 
        `)

        $(div).css({
            position: 'fixed',
            width: '620px',
            height: '460px',
            borderRadius: '10px',
            marginTop: '15%',
            background: '#fff',

            fontSize: '16px',
            padding: '25px',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
        })

        $(div).append($('<button class="aceitar">aceitar</button>'))
        $('body').append(div)

        $('.aceitar').click(() => $(div).remove())
    }
    
})
