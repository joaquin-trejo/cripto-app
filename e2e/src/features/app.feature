Feature: Ir a la pagina realizar cambio
  Mostrar el titulo

  Scenario: Pagina Realizar Cambio
    Given estoy en la pagina realizar cambio
    When escribo el valor a convertir que es 1000000
    Then debo tener el resultado 1402.79

  Scenario: Pagina Realizar Cambio seleccionando monedas
    Given estoy en la pagina realizar cambio para seleccionar monedas
    When escribo el valor del importe que es 1000000
    And selecciono la moneda de origen
    And selecciono la moneda de destino
    Then debo tener el resultado2 3112484848.48

  Scenario: Pagina Realizar Cambio Invirtiendo monedas
    Given estoy en la pagina realizar cambio para invertir orden de las monedas
    When escribo el valor del importe igual a 1000000
    And selecciono la moneda de origen a invertir
    And selecciono la moneda de destino a invertir
    And luego invierto el orden de las monedas
    Then debo obtener el resultado invirtiendo el orden de las monedas igual a 321.29
