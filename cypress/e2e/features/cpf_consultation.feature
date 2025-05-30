    Scenario: Fazer login com sucesso
        Given que eu estou na página de login
        Given eu preenchi meu nome de usuário 
        When eu preencho minha senha
        When eu clico no botão "Entrar"       
        Then eu devo ser logado com sucesso
        Then eu devo ver o painel principal    