$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var simButton = $("#open");
    var simButtonSize = 16; // Tamanho inicial do botão SIM

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        increaseSimButtonSize();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        $('#button-container').show(); // Mostra os botões SIM e NÃO
    }

    function increaseSimButtonSize() {
        simButtonSize += 25; // Aumenta o tamanho do botão SIM em 2 pixels
        simButton.css('font-size', simButtonSize + 'px');
    }

    $("#open").click(function() {
        hideEnvelope(); // Oculta o envelope apenas quando o botão "SIM" é clicado
        hideButtons(); // Oculta os botões após a escolha "SIM"
        showHappyMessage();
    });

    $("#reset").click(function() {
        increaseSimButtonSize(); // Aumenta o tamanho do botão "SIM" quando clicar em "NÃO"
    });

    function showHappyMessage() {
        $("#happy-message").show();
    }

    function hideButtons() {
        $('#button-container').hide(); // Oculta os botões após a escolha "SIM"
    }

    function hideEnvelope() {
        $('#envelope').hide(); // Oculta o envelope apenas quando o botão "SIM" é clicado
    }
});
