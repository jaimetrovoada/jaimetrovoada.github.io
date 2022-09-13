import React from 'react'
import { projects } from '../data'
import { Section } from '../components'
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
    <Section sectionTitle="Projects">
      <Box
        sx={{
          display: 'flex',
          gap: '0.25rem',
          flexDirection: 'column',
        }}
      >
        {projects.map((project) => (
          <Card
            sx={{
              backgroundColor: 'background.default',
            }}
            key={project.title}
          >
            <CardHeader title={project.title} titleTypographyProps={{ color: 'secondary.main' }} />
            <CardContent>
              <Typography>{project.description}</Typography>
            </CardContent>
            <CardActions
              sx={{
                margin: 'auto 0 0',
                gap: '10px',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'unset', md: 'inherit' },
              }}
            >
              <Box sx={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: '10px' }}>
                <ConstructionIcon />
                <Typography>{project.techStack}</Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: '5px' }}>
                <Link
                  href={project?.githubLink || '/'}
                  color="text.secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <GitHubIcon /> Source
                </Link>
                {project.liveLink ? (
                  <Link
                    href={project?.liveLink || '/'}
                    color="text.secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <LanguageIcon /> Live
                  </Link>
                ) : null}
              </Box>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Section>
  )
}

export default Projects
