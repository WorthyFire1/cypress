describe('Authorization', () => {
    beforeEach(() => {
        cy.visit('https://dev.profteam.su/login');
    });

    it('Позитивный сценарий авторизации', () => {
        cy.get('input[data-v-eaa6138e][autocomplete="username"]').type('testuser');
        cy.get('input[data-v-eaa6138e][autocomplete="current-password"]').type('TestPassword123');

        cy.get('.login-form__button button[type="submit"]').click({ force: true });

        cy.get('div[data-v-a144256a]').should('not.exist'); // Проверка отсутствия сообщения об ошибке
    });

    it('Негативный сценарий авторизации с неверными данными', () => {
        // Вводим неверный логин
        cy.get('input[data-v-eaa6138e][autocomplete="username"]').type('invalid_user');
        // Вводим неверный пароль
        cy.get('input[data-v-eaa6138e][autocomplete="current-password"]').type('invalid_password');
        // Нажимаем кнопку "Войти"
        cy.get('.login-form__button button[type="submit"]').click({ force: true });

    });
});
