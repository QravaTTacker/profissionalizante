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
- [x] Resolução das listas na pasta **_[lists](lists/)_**.

</details>

### 📦 **Download**

<p align="justify">
    Com o Git e VS Code instalados no seu computador, basta abrir o <strong>terminal</strong> e colar o comando abaixo:
</p>

```shell
git clone https://github.com/QravaTTacker/profissionalizante
code profissionalizante/

```

### 📂 **Diretórios**

<p align="justify">
    A arquitetura de pastas é relativamente simples, você pode conferir sua distribuição com o diagrama abaixo:
</p>

```shell
[Repository]
├───.git     # Configurações do git
├───.vscode  # Configurações locais e extensões
├───examples # Códigos de exemplo
├───lists    # Resolução das listas
└───projects # Projetos desenvolvidos
```

## 🔥 **Listas de Exercícios**

<details id="l1">
    <summary><strong><em>Lista 1. Fundamentos</em></strong></summary>

- **_[Ex01](lists/I/ex01.html)_**: Programa que dê boas-vindas para uma pessoa usando a função `alert()`. A pessoa deve informa seu nome em um `prompt()`. Exemplo:

```
    Entrada: Mariel
    Saída: Olá, Mariel! Seja Bem-Vindo ao mundo da programação
```

- **_[Ex02](lists/I/ex02.html)_**: Programa capaz de ler dois valores usando o `prompt()`, converte-los para número com `Number()` e, em seguida, mostra a soma entre eles através de um `alert()` Exemplo:

```
    1ª Entrada: 5
    2ª Entrada: 6
    Saída: A soma ente 5 e 6 é 11!
```

- **_[Ex03](lists/I/ex03.html)_**: Programa que recebe um número inteiro com a função `prompt()` e, em seguida, mostre seu antecessor e sucessor usando um `alert()`. Exemplo:

```
    Entrada: 1
    Saída: Analisando o valor 1, seu antecessor é 0 e seu sucessor é 2
```

- **_[Ex04](lists/I/ex04.html)_**: Programa capaz de ler dois valores, converte-los para número real com `parseFloat()` e mostra as quatro operações entre eles no documento HTML. Use a função `document.write()` e a quebra de linha `<br>` para isso. Exemplo:

```
    1ª Entrada: 5
    2ª Entrada: 2
    Saída:
            5 + 2 = 7
            5 - 2 = 3
            5 * 2 = 10
            5 / 2 = 2.5
```

- **_[Ex05](lists/I/ex05.html)_**: Programa que mostra, no documento HTML, a divisão real, divisão inteira e o módulo entre dois valores. Use a função `parseInt()` para alcançar o resultado da divisão inteira. Exemplo:

```
    1ª Entrada: 5
    2ª Entrada: 2
    Saída:
          Divisão Real: 2.5
          Divisão Inteira: 2
          Módulo da Divisão: 1
```

- **_[Ex06](lists/I/ex06.html)_**: Programa que leia duas notas de um aluno e calcule a sua média final. Exemplo:

```
    1ª Entrada: 8.5
    2ª Entrada: 10
    Saída: Média final: 9.25
```

Use essa expressão para te auxiliar na questão <strong>Ex06</strong>:

<div align="center"> 
<code><em>media = (nota1 + nota2) / 2</em></code>
</div>
</br>

- **_[Ex07](lists/I/ex07.html)_**: Programa que mostra a média ponderada de três valores com os pesos P1 = 2, P2 = 3 e P3 = 5. Exemplo:

```
    1ª Entrada: 2
    2ª Entrada: 5
    3ª Entrada: 9.5
    Saída: Sua média ponderada é 6.65
```

Use a equação abaixo para o exercício <strong>Ex007</strong>:

<div align="center"> 
<code><em>media_ponderada = (valor1 * P1 + valor2 * P2 + valor3 * P3) / (P1 + P2 + P3)</em></code>
</div>
</br>

- **_[Ex08](lists/I/ex08.html)_**: Programa que mostra o somatório de 1 até um valor n. Exemplo:

```
    Entrada: 100
    Saída: O somatório de 1 até 100 resulta em 5050
```

Use a expressão abaixo para a questão <strong>Ex08</strong>:

<div align="center">
<code><em>somatorio = n * (n + 1) / 2</em></code>
</div>
</br>

- **_[Ex09](lists/I/ex09.html)_**: Programa que leia um número de 0 a 9999 e mostre na tela cada um dos dígitos separados. Use os conceitos de divisão inteira e módulo da divisão (resto) para alcançar o resultado. Exemplo:

```
    Entrada: 1834
    Saída: 1 milhar(es), 8 centena(s), 3 dezena(s), 4 unidade(s)
```

- **_[Ex10](lists/I/ex10.html)_**: Programa que mostra a quantidade de horas, minutos e segundos a partir de um tempo total em segundos. Use os conceitos de divisão inteira e módulo da divisão (resto) para identificar o tempo de cada unidade. Exemplo:

```
    Entrada: 8620
    Saída: 2 hora(s), 23 minuto(s) e 40 segundo(s)
```

</details>

<details id="l2" open>
    <summary><strong><em>Lista 2. Controle de Fluxos - Estruturas de Decisão</em></strong></summary>

- **_[Ex11](lists/II/ex11.html)_**: Programa que leia duas notas de um aluno, calcule a média e mostra uma mensagem de parabéns, caso a média seja igual a 7,0 ou superior. Exemplo:

```
    1ª Entrada: 6
    2ª Entrada: 8
    Saída: Sua média é 7. Parabéns!
```

Use a equação abaixo para o exercício <strong>Ex11</strong>:

<div align="center">
<code><em>media = (nota1 + nota2) / 2</em></code>
</div>
</br>

- **_[Ex12](lists/II/ex12.html)_**: Programa capaz de ler um valor total das compras de um cliente e mostra uma mensagem especial caso o valor seja acima de R$500,00. Nessa situação, ele ainda vai ganhar 10% de desconto. Exemplo:

```
    Entrada:
    Saída:
```

- **_[Ex13](lists/II/ex13.html)_**: Programa que irá ler um número inteiro qualquer e se ele for positivo o programa deverá calcular o seu INVERSO, caso contrário, ele calculará seu OPOSTO. Exemplo:

```
    Entrada:
    Saída:
```

- **_[Ex14](lists/II/ex14.html)_**: Programa que leia 2 números e mostra qual é o maior e o menor. Exemplo:

```
    Entrada:
    Saída:
```

- **_[Ex15](lists/II/ex15.html)_**: Programa que leia a velocidade de um carro e verifica se ele ultrapassou de 80 km/h. Caso a velocidade esteja acima ele será multado. A multa vai custar R$ 7,00 por cada km acima do limite. Exemplo:

```
    Entrada:
    Saída:
```

- **_[Ex16](lists/II/ex16.html)_**: Programa que leia um número inteiro e mostra na tela se ele é PAR ou ÍMPAR. Exemplo:

```
    Entrada:
    Saída:
```

- **_[Ex17](lists/II/ex17.html)_**: Alistamento

```
    Entrada:
    Saída:
```

- **_[Ex18](lists/II/ex18.html)_**: Ano Bissexto

```
    Entrada:
    Saída:
```

- **_[Ex19](lists/II/ex19.html)_**: Aumento de Salário

```
    Entrada:
    Saída:
```

- **_[Ex20](lists/II/ex20.html)_**: Forma Triângulo

```
    Entrada:
    Saída:
```

</details>

<details id="l3">
    <summary><strong><em>Lista 3. Controle de Fluxos - Estruturas de Repetição</em></strong></summary>

- **_[Ex21](lists/III/ex21.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex22](lists/III/ex22.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex23](lists/III/ex23.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex24](lists/III/ex24.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex25](lists/III/ex25.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex26](lists/III/ex26.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex27](lists/III/ex27.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex28](lists/III/ex28.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex29](lists/III/ex29.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex30](lists/III/ex30.html)_**: ...

```
    Entrada:
    Saída:
```

</details>

<details id="l4">
    <summary><strong><em>Lista 4. Tipos Compostas</em></strong></summary>
    
- **_[Ex31](lists/IV/ex31.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex32](lists/IV/ex32.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex33](lists/IV/ex33.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex34](lists/IV/ex34.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex35](lists/IV/ex35.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex36](lists/IV/ex36.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex37](lists/IV/ex37.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex38](lists/IV/ex38.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex39](lists/IV/ex39.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex40](lists/IV//ex40.html)_**: ...

```
    Entrada:
    Saída:
```

</details>

<details id="l5">
    <summary><strong><em>Lista 5. Modularização</em></strong></summary>
    
- **_[Ex41](lists/V/ex41.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex42](lists/V/ex42.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex43](lists/V/ex43.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex44](lists/V/ex44.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex45](lists/V/ex45.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex46](lists/V/ex46.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex47](lists/V/ex47.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex48](lists/V/ex48.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex49](lists/V/ex49.html)_**: ...

```
    Entrada:
    Saída:
```

- **_[Ex50](lists/V/ex50.html)_**: ...

```
    Entrada:
    Saída:
```

</details>

<a href="#none" title=" "><img alt="Linha RGB" width="100%" src="https://github.com/QravaTTacker/qravattacker/blob/main/assets/line-rgb-left.gif"/></a>
