describe('Registration', () => {
    beforeEach(() => {
        cy.visit('https://dev.profteam.su');
    });

    it('Позитивный сценарий регистрации', () => {

        cy.get('input[name="fullname"]').type('Тестовый Пользователь');
        cy.get('input[name="email"]').type('test@example.com');
        cy.get('input[name="username"]').type('testuser');
        cy.get('input[name="password"]').type('TestPassword123');
        cy.get('input[name="confirmPassword"]').type('TestPassword123');

        cy.get('button[type="submit"]').click();

        cy.contains('Регистрация успешно завершена').should('be.visible');
    });

    it('Негативный сценарий регистрации с невалидными данными', () => {
        cy.get('input[name="fullname"]').type('Неверное Имя');
        cy.get('input[name="email"]').type('invalid_email');
        cy.get('input[name="username"]').type('user');
        cy.get('input[name="password"]').type('password');
        cy.get('input[name="confirmPassword"]').type('invalid_password');

        cy.get('button[type="submit"]').click();

        cy.contains('Неправильный формат электронной почты').should('be.visible');
        cy.contains('Логин должен содержать как минимум 6 символов').should('be.visible');
        cy.contains('Пароль должен содержать как минимум 6 символов').should('be.visible');
        cy.contains('Пароли не совпадают').should('be.visible');
    });
});

describe('Autorization', () => {
    beforeEach(() => {
        cy.visit('https://dev.profteam.su');
    });

    it('Позитивный сценарий авторизации', () => {

        cy.get('input[name="username"]').type('testuser');
        cy.get('input[name="password"]').type('TestPassword123');
        cy.get('button[type="submit"]').click();

        cy.contains('Добро пожаловать, Тестовый Пользователь').should('be.visible');
    });

    it('Негативный сценарий авторизации с невалидными данными', () => {
        cy.get('input[name="username"]').type('invalid_user');
        cy.get('input[name="password"]').type('invalid_password');
        cy.get('button[type="submit"]').click();
        cy.contains('Неверное имя пользователя или пароль').should('be.visible');
    });
});
