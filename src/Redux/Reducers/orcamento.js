let defaultState;
if (localStorage.getItem("orcamento")) {
  defaultState = JSON.parse(localStorage.getItem("orcamento"));
} else {
  defaultState = {
    id: Math.random().toString(36).slice(-8),
    pagamentoAntecipado: false,
    subTotal: 0,
    total: 0,
    itens: [
      {
        sku: "",
        nome: "",
        valor: 0,
        valorReal: 0,
        quantidade: 0,
        preco: 0,
        multiplo: 0,
        caixaMaster: 0,
        estoque: "",
      },
    ],
  };
}

const reducerOrcamento = (state = defaultState, action) => {
  let subtot = 0;
  let tot = 0;
  switch (action.type) {
    case "NOVOORCAMENTO":
      state = {
        pagamentoAntecipado: false,
        subTotal: 0,
        total: 0,
        itens: action.itens,
      };
      let save = JSON.stringify(state);
      localStorage.setItem("orcamento", save);
      return state;
    // case "TROCARITEM":
    //   const info = action.payload;
    //   const index = action.index;
    //   let preco = (parseFloat(info.valor) * parseInt(action.desconto)) / 100;
    //   state.itens[index] = {
    //     sku: info.sku,
    //     nome: info.nome,
    //     valor: preco.toFixed(2),
    //     valorReal: preco.toFixed(2),
    //     multiplo: info.multiplo,
    //     quantidade: 0,
    //     caixaMaster: info.caixaMaster,
    //     estoque: info.estoque,
    //   };
    //   return state;
    case "INCREMENT":
      let caixaMaster = state.itens[action.index].caixaMaster;
      let quantidade =
        parseFloat(state.itens[action.index].quantidade) +
        parseFloat(state.itens[action.index].multiplo);
      let valor = state.itens[action.index].valor;
      if (quantidade % caixaMaster === 0) {
        valor = (valor * 0.95).toFixed(2);
      }
      state.itens[action.index] = {
        ...state.itens[action.index],
        quantidade,
        valorReal: valor,
      };
      return state;
    case "DECREMENT":
      let quantidadeDecrement =
        state.itens[action.index].quantidade -
        state.itens[action.index].multiplo;
      if (quantidadeDecrement >= 0) {
        let caixaMaster = state.itens[action.index].caixaMaster;
        let valor = state.itens[action.index].valor;
        if (
          quantidadeDecrement % caixaMaster === 0 &&
          quantidadeDecrement > 0
        ) {
          valor = valor * 0.95;
        }
        state.itens[action.index] = {
          ...state.itens[action.index],
          quantidade: quantidadeDecrement,
          valorReal: valor,
        };
      }
      return state;
    case "TOTALPRODUTO":
      let precoTotal =
        Math.round(
          state.itens[action.index].quantidade *
            state.itens[action.index].valorReal *
            100
        ) / 100;
      state.itens[action.index] = {
        ...state.itens[action.index],
        preco: precoTotal.toFixed(2),
      };
      for (let i = 0; i < state.itens.length; i++) {
        const element = state.itens[i];
        if (parseFloat(element.preco)) {
          subtot = subtot + parseFloat(element.preco);
        }
      }
      if (state.pagamentoAntecipado) {
        tot = subtot * 0.95;
      } else {
        tot = subtot;
      }
      state = { ...state, subTotal: subtot, total: tot.toFixed(2) };
      return state;
    // case "ADDITEM":
    //   state.itens = [
    //     ...state.itens,
    //     { sku: "", nome: "", valor: 0, quantidade: 0, preco: 0, multiplo: 0 },
    //   ];
    //   return state;
    case "PAGAMENTOANTECIPADO":
      state = { ...state, pagamentoAntecipado: action.isPA };
      for (let i = 0; i < state.itens.length; i++) {
        const element = state.itens[i];
        if (parseFloat(element.preco)) {
          subtot = subtot + parseFloat(element.preco);
        }
      }
      if (state.pagamentoAntecipado) {
        tot = subtot * 0.95;
      } else {
        tot = subtot;
      }
      state = { ...state, subTotal: subtot, total: tot.toFixed(2) };
      return state;
    default:
      return state;
  }
};

export default reducerOrcamento;
