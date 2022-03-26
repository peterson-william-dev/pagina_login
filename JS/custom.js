function animaLogin() {
    $("[data-anima='Tlogin']").addClass('animate');
    $("[data-anima='Iplogin']").addClass('animate');
}

function ocultaMostra(x) {
    let LoginScreen = $(".login");
    let RegisterScreen = $(".cadastre-se");

    if (x == 1) {
        LoginScreen.addClass("OcultoLg");
        setTimeout(function() {
            LoginScreen.css("display", "none")
        }, 1000)
        RegisterScreen.css("display", "block")
        setTimeout(function() { 
            RegisterScreen.addClass("cadastroEnabled");
        }, 1000)
    } else if (x == 2) {
        $(".cadastre-se").removeClass("cadastroEnabled");
        setTimeout(function() {
            $(".cadastre-se").css("display", "none");
        }, 1000);
        $(".login").css("display", "block");
        setTimeout(function() {
            $(".login").removeClass("OcultoLg");
        }, 1000)
    }
}

function verificaCadastro() {
    if (
        ($("[name='nome']").hasClass('is-valid')) &&
        ($("[name='telefone']").hasClass('is-valid')) &&
        ($("[name='senha']").hasClass('is-valid')) &&
        ($("[name='verificaSenha']").hasClass('is-valid')) &&
        ($("[name='cpf']").hasClass('is-valid')) &&
        ($("[name='data_nasc']").hasClass('is-valid'))
    ) {
        $("[name='btn-cadastrar']").removeClass('disabled')
    }
}
function verificaInput() {

    $("[name='nome']").keyup(function() {
        setTimeout(function() {
            if (($("[name='nome']").val().length < 8) && ($("[name='nome']").val().length > 0)) {
                if ($("[name='nome']").hasClass("is-valid")) {
                    $("[name='nome']").removeClass("is-valid")
                }
                $("[name='nome']").addClass("is-invalid")
            } else if ($("[name='nome']").val().length >= 8) {
                if ($("[name='nome']").hasClass("is-invalid")) {
                    $("[name='nome']").removeClass("is-invalid")
                }
                $("[name='nome']").addClass("is-valid")
                
            } else {
                if ($("[name='nome']").hasClass("is-valid")) {
                    $("[name='nome']").removeClass("is-valid")
                }
                if ($("[name='nome']").hasClass("is-invalid")) {
                    $("[name='nome']").removeClass("is-invalid")
                }
            }
            verificaCadastro();
        }, 2000)
    })

    $("[name='telefone']").keyup(function() {
        setTimeout(function() {
            if (($("[name='telefone']").val().length < 11) && ($("[name='telefone']").val().length > 0)) {
                if ($("[name='telefone']").hasClass("is-valid")) {
                    $("[name='telefone']").removeClass("is-valid")
                }
                $("[name='telefone']").addClass("is-invalid")
            } else if ($("[name='telefone']").val().length >= 11) {
                if ($("[name='telefone']").hasClass("is-invalid")) {
                    $("[name='telefone']").removeClass("is-invalid")
                }
                $("[name='telefone']").addClass("is-valid")
            } else {
                if ($("[name='telefone']").hasClass("is-valid")) {
                    $("[name='telefone']").removeClass("is-valid")
                }
                if ($("[name='telfone']").hasClass("is-invalid")) {
                    $("[name='telefone']").removeClass("is-invalid")
                }
            }
            verificaCadastro(); 
        }, 2000)
    })

    $("[name='senha']").keyup(function() {
        setTimeout(function() {
            if (($("[name='senha']").val().length < 8) && ($("[name='senha']").val().length > 0)) {
                if ($("[name='senha']").hasClass("is-valid")) {
                    $("[name='senha']").removeClass("is-valid")
                }
                $("[name='senha']").addClass("is-invalid")
            } else if ($("[name='senha']").val().length >= 8) {
                if ($("[name='senha']").hasClass("is-invalid")) {
                    $("[name='senha']").removeClass("is-invalid")
                }
                $("[name='senha']").addClass("is-valid")

            } else {
                if ($("[name='senha']").hasClass("is-valid")) {
                    $("[name='senha']").removeClass("is-valid")
                }
                if ($("[name='senha']").hasClass("is-invalid")) {
                    $("[name='senha']").removeClass("is-invalid")
                }
            }
            if  (($("[name='verificaSenha']").val() > 0) && ($("[name='verificaSenha']") != $("[name='senha']"))) {
                if ($("[name='verificaSenha']").hasClass("is-valid")) {
                    $("[name='verificaSenha']").removeClass("is-valid")
                }
                $("[name='verificaSenha']").addClass("is-invalid")
            }
            verificaCadastro();
        }, 2000)
    })

    $("[name='verificaSenha']").keyup(function() {
        setTimeout(function() {
            if (($("[name='verificaSenha']").val() == $("[name='senha']").val()) && ($("[name='verificaSenha']").val().length >= 8)) {

                if ($("[name='verificaSenha']").hasClass("is-invalid")) {
                    $("[name='verificaSenha']").removeClass("is-invalid")
                }
                $("[name='verificaSenha']").addClass("is-valid")

            } else if (($("[name='verificaSenha']").val() != $("[name='senha']").val()) || ($("[name='verificaSenha']").val().length < 8)) {

                if ($("[name='verificaSenha']").hasClass("is-valid")) {
                    $("[name='verificaSenha']").removeClass("is-valid")
                }
                $("[name='verificaSenha']").addClass("is-invalid")

            } else if ($("[name='verificaSenha']").val().length == 0) {
                if ($("[name='verificaSenha']").hasClass("is-valid")) {
                    $("[name='verificaSenha']").removeClass("is-valid")
                }
                if ($("[name='verificaSenha']").hasClass("is-invalid")) {
                    $("[name='verificaSenha']").removeClass("is-invalid")
                }
            }
            verificaCadastro();
        }, 2000)
    })

    $("[name='cpf']").keyup(function() {
        setTimeout(function() {
            if (($("[name='cpf']").val().length < 11) && ($("[name='cpf']").val().length > 0)) {
                if ($("[name='cpf']").hasClass("is-valid")) {
                    $("[name='cpf']").removeClass("is-valid")
                }
                $("[name='cpf']").addClass("is-invalid")
            } else if ($("[name='cpf']").val().length >= 11) {
                if ($("[name='cpf']").hasClass("is-invalid")) {
                    $("[name='cpf']").removeClass("is-invalid")
                }
                $("[name='cpf']").addClass("is-valid")
            } else {
                if ($("[name='cpf']").hasClass("is-valid")) {
                    $("[name='cpf']").removeClass("is-valid")
                }
                if ($("[name='cpf']").hasClass("is-invalid")) {
                    $("[name='cpf']").removeClass("is-invalid")
                }
            } 
            verificaCadastro();
        }, 2000)
    })

    $("[name='data_nasc']").keyup(function() {
        setTimeout(function() {
            if (($("[name='data_nasc']").val().length < 8) && ($("[name='data_nasc']").val().length > 0)) {
                if ($("[name='data_nasc']").hasClass("is-valid")) {
                    $("[name='data_nasc']").removeClass("is-valid")
                }
                $("[name='data_nasc']").addClass("is-invalid")
            } else if ($("[name='data_nasc']").val().length >= 8) {
                if ($("[name='data_nasc']").hasClass("is-invalid")) {
                    $("[name='data_nasc']").removeClass("is-invalid")
                }
                $("[name='data_nasc']").addClass("is-valid")
            } else {
                if ($("[name='data_nasc']").hasClass("is-valid")) {
                    $("[name='data_nasc']").removeClass("is-valid")
                }
                if ($("[name='data_nasc']").hasClass("is-invalid")) {
                    $("[name='data_nasc']").removeClass("is-invalid")
                }
            } 
            verificaCadastro();
        }, 2000)
    })

    $("[name='email']").keyup(function() {
        let emailFilter= /^.+@.+\..{3,}$/;
        let illegalChars= /[\(\)\<\>\,\;\:\\\/\"\[\]]/;
        setTimeout(function() {
        if ((!emailFilter.test($("[name='email']").val())) || $("[name='email']").val().match(illegalChars)) {
            if ($("[name='email']").hasClass("is-valid")) {
                $("[name='email']").removeClass("is-valid")
            }
            $("[name='email']").addClass("is-invalid")
        } else {
            if ($("[name='email']").hasClass("is-invalid")) {
                $("[name='email']").removeClass("is-invalid")
            }
            $("[name='email']").addClass("is-valid")
        }
        verificaCadastro();
        }, 2000)
    })
}


$(document).ready(function(){
    animaLogin();
    verificaInput();
})