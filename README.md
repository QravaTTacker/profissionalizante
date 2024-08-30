<div align="center">
<pre align="center">
        ____             _____           _                   ___                   __     
       / __ \_________  / __(_)_________(_)___  ____  ____ _/ (_)___  ____ _____  / /____ 
      / /_/ / ___/ __ \/ /_/ / ___/ ___/ / __ \/ __ \/ __ `/ / /_  / / __ `/ __ \/ __/ _ \
     / ____/ /  / /_/ / __/ (__  |__  ) / /_/ / / / / /_/ / / / / /_/ /_/ / / / / /_/  __/
    /_/   /_/   \____/_/ /_/____/____/_/\____/_/ /_/\__,_/_/_/ /___/\__,_/_/ /_/\__/\___/ 
  _________________________________________________________________________________________
</pre>
</div>

<a href="#none" title=" "><img alt="Linha RGB" width="100%" src="https://github.com/QravaTTacker/qravattacker/blob/main/assets/line-rgb-left.gif"/></a>

## 💻 **Introdução**

<p align="justify">
    Repositório de apoio para turmas de ensino técnico. Você poderá usar esse repositório para fortalecer os conceitos ensinados em sala de aula por meio da:
</p>

- [x] Documentação de exemplos na pasta **_[examples](examples/)_**;
- [x] Revisão de projetos na pasta **_[projects](projects/)_**; e
- [x] Resolução das listas na pata **_[lists](lists/)_**.

</details>

### 📦 **Download**

<p align="justify">
    Com o Git e VS Code instalados no seu computador, basta abrir o <strong>terminal</strong> e colar o comando abaixo:
</p>

```shell
git clone https://github.com/QravaTTacker/tests-joao.git
code tests-joao/

```

### 📂 **Diretórios**

<p align="justify">
    A arquitetura de pastas é relativamente simples, você pode conferir sua distribuição com o diagrama abaixo:
</p>

```shell
[Repository]
├───.vscode  # Configurações locais e extensões (útil)
├───examples # Códigos de exemplo
├───lists    # Resolução das listas
└───projects # Projetos desenvolvidos
```

## 🔥 **Listas de Exercícios**

<details>
    <summary><strong><em>Lista 1. Fundamentos</em></strong></summary>

- **_[Ex001](lists/lista_I/ex01.html)_**: Usando a função `alert()`, dê boas-vindas para uma pessoa que informa seu nome em um `prompt()`. Exemplo:

```
    Entrada: Mariel
    Saída: Olá, Mariel!
```

- **_[Ex002](lists/lista_I/ex02.html)_**: Crie um algoritmo capaz de ler dois valores com `prompt()`, converte-los para número com `Number()` e, em seguida, mostre a soma entre eles com `alert()`. Exemplo:

```
    1ª Entrada: 5
    2ª Entrada: 6
    Saída: A soma ente 5 e 6 é 11!
```

- **_[Ex003](lists/lista_I/ex03.html)_**: Crie um programa para ler um número inteiro com a função `prompt()` e, em seguida, mostre seu antecessor e sucessor com o `alert()`. Exemplo:

```
    Entrada: 1
    Saída: Seu antecessor é 0 e seu sucessor é 2
```

- **_[Ex004](lists/lista_I/ex04.html)_**: Programa capaz de ler dois valores, converte-los para número real com `parseFloat()` e mostrar as quatro operações entre eles no documento HTML. Use a função `document.write()` e a quebra de linha `<br>` para isso. Exemplo:

```
    1ª Entrada: 5
    2ª Entrada: 2
    Saída:
            5 + 2 = 7
            5 - 2 = 3
            5 * 2 = 10
            5 / 2 = 2.5
```

- **_[Ex005](lists/lista_I/ex05.html)_**: Programa que mostra no documento HTML a divisão real, divisão inteira e o módulo entre dois valores. Use a função `parseInt()` para alcançar o resultado da divisão inteira. Exemplo:

```
    1ª Entrada: 5
    2ª Entrada: 2
    Saída:
            5 / 2 = 2.5
            5 // 2 = 2
            5 % 2 = 1
```

- **_[Ex006](lists/lista_I/ex06.html)_**: Programa que leia duas notas de um aluno e calcule a sua média final. Exemplo:

```
    1ª Entrada: 8.5
    2ª Entrada: 10
    Saída: 9.25
```

Use essa expressão para te auxiliar na questão <strong>Ex006</strong>:

<div align="center"> 
<code><em>media = (nota1 + nota2) / 2</em></code>
</div>
</br>

- **_[Ex007](lists/lista_I/ex07.html)_**: Programa que mostra a média ponderada de três valores com os pesos P1 = 2, P2 = 3 e P3 = 5. Exemplo:

```
    1ª Entrada: 2
    2ª Entrada: 5
    3ª Entrada: 9.5
    Saída: Sua média é 6.65
```

Use a equação abaixo para o exercício <strong>Ex007</strong>:

<div align="center"> 
<code><em>media_ponderada = (valor1 * P1 + valor2 * P2 + valor3 * P3) / (P1 + P2 + P3)</em></code>
</div>
</br>

- **_[Ex008](lists/lista_I/ex08.html)_**: Programa que mostra o somatório de 1 até um valor n. Exemplo:

```
    Entrada: 100
    Saída: 5050
```

Use a expressão abaixo para a questão <strong>Ex008</strong>:

<div align="center">
<code><em>somatorio = n * (n + 1) / 2</em></code>
</div>
</br>

- **_[Ex009](lists/lista_I/ex09.html)_**: Desenvolva um programa que leia um número de 0 a 9999 e mostre na tela cada um dos dígitos separados. Use os conceitos de divisão inteira e módulo da divisão (resto) para alcançar o resultado. Exemplo:

```
    Entrada: 1834
    Saída: 1 milhar(es), 8 centena(s), 3 dezena(s), 4 unidade(s)
```

- **_[Ex010](lists/lista_I/ex10.html)_**: Crie um algoritmo que mostra a quantidade de horas, minutos e segundos a partir de um tempo total em
  segundos. Use os conceitos de divisão inteira e módulo da divisão (resto) para identificar tempo de cada unidade. Exemplo:

```
    Entrada: 8620
    Saída: 2 hora(s), 23 minuto(s) e 40 segundo(s)
```

</details>

<details>
    <summary><strong><em>Lista 2. Controle de Fluxos - Estruturas de Decisão</em></strong></summary>

- **_[Ex011](lists/lista_II/ex11.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex012](lists/lista_II/ex12.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex013](lists/lista_II/ex13.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex014](lists/lista_II/ex14.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex015](lists/lista_II/ex15.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex016](lists/lista_II/ex16.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex017](lists/lista_II/ex17.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex018](lists/lista_II/ex18.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex019](lists/lista_II/ex19.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex020](lists/lista_II/ex20.html)_**: ...

```
    Entrada:
    Saída:
```

</details>

<details>
    <summary><strong><em>Lista 3. Controle de Fluxos - Estruturas de Repetição</em></strong></summary>

- **_[Ex021](lists/lista_III/ex21.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex022](lists/lista_III/ex22.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex023](lists/lista_III/ex23.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex024](lists/lista_III/ex24.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex025](lists/lista_III/ex25.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex026](lists/lista_III/ex26.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex027](lists/lista_III/ex27.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex028](lists/lista_III/ex28.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex029](lists/lista_III/ex29.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex030](lists/lista_III/ex30.html)_**: ...

```
    Entrada:
    Saída:
```

</details>

<details>
    <summary><strong><em>Lista 4. Tipos Compostas</em></strong></summary>
    
- **_[Ex031](lists/lista_IV/ex31.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex032](lists/lista_IV/ex32.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex033](lists/lista_IV/ex33.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex034](lists/lista_IV/ex34.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex035](lists/lista_IV/ex35.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex036](lists/lista_IV/ex36.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex037](lists/lista_IV/ex37.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex038](lists/lista_IV/ex38.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex039](lists/lista_IV/ex39.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex040](lists/lista_IV//ex40.html)_**: ...

```
    Entrada:
    Saída:
```

</details>

<details>
    <summary><strong><em>Lista 5. Modularização</em></strong></summary>
    
- **_[Ex041](lists/lista_V/ex41.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex042](lists/lista_V/ex42.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex043](lists/lista_V/ex43.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex044](lists/lista_V/ex44.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex045](lists/lista_V/ex45.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex046](lists/lista_V/ex46.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex047](lists/lista_V/ex47.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex048](lists/lista_V/ex48.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex049](lists/lista_V/ex49.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex050](lists/lista_V/ex50.html)_**: ...

```
    Entrada:
    Saída:
```

</details>

<a href="#none" title=" "><img alt="Linha RGB" width="100%" src="https://github.com/QravaTTacker/qravattacker/blob/main/assets/line-rgb-left.gif"/></a>
