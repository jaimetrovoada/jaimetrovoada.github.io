// import React from 'react'
import { projects } from 'data'
import { Section } from 'components'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
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
        '>div:not(:last-child)': {
          marginBottom: '20px',
        },
      }}
    >
      {projects.map((project) => (
        <Card
          sx={{
            maxWidth: { xs: '100%', md: '500px' },
          }}
        >
          <CardHeader>
            <Typography variant="h6">{project.title}</Typography>
          </CardHeader>
          <CardContent>
            <Typography>{project.description}</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: '10px' }}>
              <ConstructionIcon />
              <Typography>{project.techStack}</Typography>
            </Box>
          </CardContent>
          <CardActionArea>
            <IconButton href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </IconButton>
            {project.liveLink ? (
              <IconButton href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <LanguageIcon />
              </IconButton>
            ) : null}
          </CardActionArea>
        </Card>
      ))}
    </Section>
  )
}

export default Projects
