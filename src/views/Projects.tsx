// import React from 'react'
import { projects } from 'data'
import { Section } from 'components'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import ConstructionIcon from '@mui/icons-material/Construction'

const Projects = () => {
  return (
    <Section
      sectionTitle="Projects"
      sx={{
        flex: '1 1 100%',
        height: '100%',
        maxHeight: '100%',
        overflow: { md: 'auto' },
        '>div:not(:last-child)': {
          marginBottom: '20px',
        },
      }}
    >
      {/* TODO: find a way to keep title on top while letting the card region be scrollable */}
      {projects.map((project) => (
        <Card
          sx={{
            maxWidth: { xs: '100%', md: '500px' },
          }}
        >
          <CardHeader title={project.title} titleTypographyProps={{ color: 'secondary.main' }} />
          <CardContent>
            <Typography>{project.description}</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: '10px' }}>
              <ConstructionIcon />
              <Typography>{project.techStack}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Link href={project?.githubLink || '/'} color="text.secondary" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </Link>
            <Link href={project?.liveLink || '/'} color="text.secondary" target="_blank" rel="noopener noreferrer">
              <LanguageIcon />
            </Link>
          </CardActions>
        </Card>
      ))}
    </Section>
  )
}

export default Projects
