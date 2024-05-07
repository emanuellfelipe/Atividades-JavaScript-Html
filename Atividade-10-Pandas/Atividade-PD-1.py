import pandas as pd

# Exercício 1
produtos = ['cadeira', 'mesa', 'torneira', 'cama', 'abajur', 'porta']
precos = [50, 200, 15, 800, 90, 450]
df = pd.DataFrame({'produto': produtos, 'preco': precos})

# Exercício 2
df = df.sort_values('preco', ascending=False)

# Exercício 3
df = df.append({'produto': 'tapete', 'preco': 250}, ignore_index=True)

# Exercício 4
df_filtrado = df[df['preco'] < 100]

# Exercício 5
df.to_csv('produtos.csv', index=False)

# Exercício 6
df = pd.read_csv('produtos.csv')
df['vendas'] = 0

# Exercício 7
vendas = ['cadeira', 'mesa', 'torneira', 'cama', 'abajur', 'porta']
qtd_vendida = [5, 12, 65, 51, 12, 9]
df_vendas = pd.DataFrame({'produto': vendas, 'qtd_vendida': qtd_vendida})
df = pd.merge(df, df_vendas, on='produto')

# Exercício 8
df['receita'] = df['preco'] * df['qtd_vendida']
receita_total = df['receita'].sum()
df['porcentagem'] = (df['receita'] / receita_total) * 100
