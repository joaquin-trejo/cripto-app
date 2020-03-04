Feature: Ir a la pagina realizar cambio
  Mostrar el titulo

  Scenario: Pagina Realizar Cambio
    Given estoy en la pagina realizar cambio
    When escribo el valor a convertir que es 1000000
    Then debo tener el resultado 1327.96

  Scenario: Pagina Realizar Cambio seleccionando monedas
    Given estoy en la pagina realizar cambio
    When escribo el valor a convertir que es 1000000
    And doy click al dropdown de la moneda de origen
    And escojo la moneda EUR
    And doy click dropdown de la moneda de destino
    And escojo la moneda COP
    Then debo tener el resultado 3860012236.38
