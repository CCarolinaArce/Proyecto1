import { Container, Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';

function Blog() {
  const blogPosts = []

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Leer Más</Button>
                {/* Otros botones si es necesario */}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Blog;
