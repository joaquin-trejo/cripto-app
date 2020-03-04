Feature: Ir a la pagina realizar cambio
  Mostrar el titulo

  Scenario: Pagina Realizar Cambio
    Given estoy en la pagina realizar cambio
    When escribo el valor a convertir que es 1000000
    Then debo tener el resultado 1327.96
