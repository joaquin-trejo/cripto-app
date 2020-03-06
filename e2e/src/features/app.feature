Feature: Ir a la pagina realizar cambio
  Mostrar el titulo

  Scenario: Pagina Realizar Cambio
    Given estoy en la pagina realizar cambio
    When escribo el valor a convertir que es 1000000
    Then debo tener el resultado 1367.24

  Scenario: Pagina Realizar Cambio seleccionando monedas
    Given estoy en la pagina realizar cambio para seleccionar monedas
    When escribo el valor del importe que es 1000000
    And selecciono la moneda de origen
    And selecciono la moneda de destino
    Then debo tener el resultado 3094376190.48
