# 🛡️ Task: Widget de Recrutamento RPG (Vanilla JS)

**Status:** Open  
**Assignee:** Junior Developer  
**Priority:** High  
**Contexto:** Sistema de distribuição de atributos para um mini-game.

---

## 📋 Descrição da Demanda
Precisamos de um componente que permita ao jogador criar heróis para o seu grupo. O ponto crucial é a **trava de segurança**: o jogador tem exatamente **15 pontos** para gastar. O sistema deve impedir o recrutamento se ele tentar "roubar" pontos extras.

## 🏗️ Requisitos de Interface (HTML/CSS)
Crie uma estrutura simples contendo:
- [ ] Um `input` de texto para o **Nome**.
- [ ] Um `select` com as opções: **Guerreiro, Mago, Arqueiro**.
- [ ] Três `inputs` do tipo número: **Força, Agilidade e Inteligência** (valor inicial: 0).
- [ ] Um elemento de texto para exibir os **Pontos Restantes** (inicial: 15).
- [ ] Um botão **"Recrutar Herói"**.
- [ ] Uma `div` ou `ul` vazia com o ID `grupo-herois` para listar os criados.

## ⚙️ Regras de Negócio (O Desafio JS)

### 1. Cálculo de Pontos (Tempo Real)
- Sempre que qualquer um dos 3 inputs de atributos mudar (`input` event), o JS deve:
    - Somar os valores atuais dos 3 campos.
    - Subtrair de 15.
    - Atualizar o texto na tela com o novo saldo.

### 2. Validação Visual
- Se o saldo de pontos for **negativo**:
    - O texto do saldo deve ficar vermelho (classe CSS).
    - O botão de recrutamento deve ser desativado (`disabled`).
- Se o saldo for **positivo ou zero**:
    - O texto volta ao normal.
    - O botão é reativado.

### 3. Persistência na Tela (DOM)
- Ao clicar em "Recrutar Herói":
    - Capturar o Nome, Classe e os Atributos.
    - Criar um novo elemento HTML (Card) usando `document.createElement`.
    - O card deve exibir: `[Nome] o [Classe] | STR: [X] AGI: [Y] INT: [Z]`.
    - Injetar o card na lista de grupo.
    - **Reset:** Limpar o formulário e resetar o saldo de pontos para 15.

---

## 🛠️ Critérios Técnicos (Padrão de Código)
- Use `const` e `let` (nada de `var`).
- Use **Arrow Functions** para os eventos.
- Converta os valores dos inputs para `Number()` antes de calcular.
- Use `template strings` para montar o texto do card.