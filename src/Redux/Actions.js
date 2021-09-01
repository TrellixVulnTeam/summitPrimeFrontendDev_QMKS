export const increment = (index, multiplo) => {
    return {
        type: 'INCREMENT',
        index,
    }
}
export const decrement = (index, multiplo) => {
    return {
        type: 'DECREMENT',
        index,
    }
}

export const trocarItem = (infos, index, desconto) => {
    return {
        type: 'TROCARITEM',
        payload: infos,
        index: index,
        desconto
    }

}

export const calcularTotal = (index) => {
    return {
        type: 'TOTALPRODUTO',
        index: index
    }

}

export const addItem = () => {
    return {
        type: 'ADDITEM'
    }

}

export const login = (infos) => {
    return {
        type: 'LOGIN',
        infos

    }
}
export const adminLogin = () => {
    return {
        type: 'ADMINLOGIN',
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}

export const adminLogout = () => {
    return {
        type: 'ADMINLOGOUT',
    }
}

export const pedidoMin = (UF, valor) => {
    return {
        type: 'PEDIDOMIN',
        UF,
        valor

    }
}
export const changePage = (page) => {
    return {
        type: 'SWITCH',
        page
    }
}
export const updateVndaPedidos = (pedido) => {
    return {
        type: 'UPDATEVNDAPEDIDOS',
        pedido
    }
}
export const clearVndaPedidos = () => {
    return {
        type: 'CLEARVNDAPEDIDOS',
    }
}
export const showVndaModal = (pedido) => {
    return {
        type: 'SHOWVNDAMODAL',
        pedido
    }
}
export const hideVndaModal = () => {
    return {
        type: 'HIDEVNDAMODAL',
    }
}