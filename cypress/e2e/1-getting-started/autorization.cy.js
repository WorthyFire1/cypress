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
        cy.log("Клик по кнопке 'Войти' ")
        cy.get('.button__background-color-green').click()

        cy.wait(1000)

        cy.get('div[class="form-error form-error-- form-error-- form-error--"]').should('exist')

    });
    it('Проверка блокировки кнопки "Войти" при отсутствии введенных данных', () => {
        // Проверяем, что кнопка "Войти" заблокирована, когда нет введенных данных
        cy.get('.button__background-color-green').should('be.disabled');
    });

});
