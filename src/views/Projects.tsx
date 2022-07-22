import React from 'react'
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
import Carousel from 'react-material-ui-carousel'

const Projects = () => {
  return (
    <Section sectionTitle="Projects">
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          gap: '0.25rem',
          '>div': {
            flex: '0 0 300px',
            '&:not(:last-child)': {
              marginBottom: '20px',
            },
          },
        }}
      >
        <Carousel
          animation="slide"
          indicatorIconButtonProps={{
            style: {
              background: '#E3EDFF',
              color: '#E3EDFF',
              margin: '0 5px',
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              background: '#294FE4',
              color: '#294FE4',
            },
          }}
        >
          {projects.map((project) => (
            <Card
              sx={{
                maxWidth: { xs: '100%', md: '300px' },
                width: { xs: '100%', md: '300px' },
                maxHeight: '300px',
                height: '300px',
                backgroundColor: 'background.default',
              }}
              key={project.title}
            >
              <CardHeader title={project.title} titleTypographyProps={{ color: 'secondary.main' }} />
              <CardContent>
                <Typography>{project.description}</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: '10px' }}>
                  <ConstructionIcon />
                  <Typography>{project.techStack}</Typography>
                </Box>
              </CardContent>
              <CardActions sx={{ margin: 'auto 0 0' }}>
                <Link
                  href={project?.githubLink || '/'}
                  color="text.secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </Link>
                {project.liveLink ? (
                  <Link
                    href={project?.liveLink || '/'}
                    color="text.secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LanguageIcon />
                  </Link>
                ) : null}
              </CardActions>
            </Card>
          ))}
        </Carousel>
      </Box>
    </Section>
  )
}

export default Projects
