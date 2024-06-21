import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { getProdutos, deletaProduto } from '../servicos/ProdutoService';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const produtos = await getProdutos();
      setProdutos(produtos);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deletaProduto(id);
    setProdutos(produtos.filter(produto => produto.id !== id));
  };

  return (
    <Container>
      <Button as={Link} to="/adiciona-produto" variant="primary" className="mb-3">
        Criar Produto
      </Button>
      {produtos.map(produto => (
        <Card key={produto.id} className="mb-3">
          <Card.Img variant="top" src={produto.imagem} />
          <Card.Body>
            <Card.Title>{produto.nome}</Card.Title>
            <Card.Text>Preço: R${produto.preco.toFixed(2)}</Card.Text>
            <Button variant="warning" className="mr-2" onClick={() => navigate(`/edita-produto/${produto.id}`)}>Editar</Button>
            <Button variant="danger" onClick={() => handleDelete(produto.id)}>Excluir</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Home;

/*import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProdutos } from '../../service/ProdutoService';
import { Card } from '../../components/cardProduto/CardProduto';


function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProdutos()
      .then((response) => setProducts(response))
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

  const handleCreateProduct = () => {
    navigate('/adicionar');
  };

  return (
    <div>
      <button style={styles.createButton} onClick={handleCreateProduct}>Criar Produto</button>
      <div style={styles.container}>
        {products.map((produto) => (
          <Card key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}


const styles = {
  createButton: {
    padding: '10px 20px',
    margin: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  }
};

export default Home;*/

