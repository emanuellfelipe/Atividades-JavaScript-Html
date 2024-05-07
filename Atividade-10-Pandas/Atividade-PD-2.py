import pandas as pd
from sqlalchemy import create_engine

# Exercício 1
engine = create_engine('postgresql://root:postgres@localhost:5432/QQ TECH')

# Exercício 2
# a)
df_sp = pd.read_sql_query("SELECT * FROM tabela_treinamento WHERE cidade = 'São Paulo'", engine)

# b)
df_idade = pd.read_sql_query("SELECT * FROM tabela_treinamento WHERE idade BETWEEN 22 AND 27", engine)

# c) 
df_maria = pd.read_sql_query("SELECT cidade FROM tabela_treinamento WHERE nome = 'Maria'", engine)

# Exercício 3
df_novo = pd.DataFrame({'nome': ['João', 'Ana'], 'idade': [30, 25], 'cidade': ['Recife', 'Salvador']})
df_novo.to_sql('tabela_treinamento', engine, if_exists='append', index=False)
