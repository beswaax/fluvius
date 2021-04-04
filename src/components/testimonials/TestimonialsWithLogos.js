import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import { useMediaQuery, useTheme } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.grey[50],
  },
  logo: {
    height: 48,
    marginTop: "auto",
    marginBottom: "auto",
  },
  paper: {
    maxHeight: 128,
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.grey[50],
    border: 0,
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
}));

export default function Testimonials(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    "header-p1": "You can rely on Fluvius",
    description:
      "With years of experience behind us, you can be sure that we can complete any project of any size, large or small.",
    logo1: "/assets/logo2.webp",
    logo2: "/assets/logo3.webp",
    logo3: "/assets/logo1.webp",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={3}>
          <Grid direction={matchesSM ? "column" : "row"} container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box mt={5} align={matchesSM ? "center" : "inherit"}>
                <Typography variant="h4" component="h3" gutterBottom={true}>
                  <Typography
                    color="primary"
                    variant="h4"
                    className={classes.title}
                    component="span"
                  >
                    {content["header-p1"]}
                  </Typography>
                </Typography>
                <Typography
                  color="textSecondary"
                  variant="h6"
                  paragraph={true}
                  className={classes.decription}
                >
                  {content["description"]}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexWrap="wrap" justifyContent="center">
                <Box pt={matchesSM ? 0 : 10} pb={matchesSM ? 3 : 0}>
                  <Paper variant="outlined" className={classes.paper}>
                    <Image
                      src={content["logo1"]}
                      width={72}
                      height={48}
                      alt="first company logo that we worked with"
                    />
                  </Paper>
                </Box>
                <Box pt={matchesSM ? 0 : 10} pb={matchesSM ? 3 : 0}>
                  <Paper variant="outlined" className={classes.paper}>
                    <Image
                      src={content["logo2"]}
                      width={89}
                      height={48}
                      alt="second company logo that we worked with"
                    />
                  </Paper>
                </Box>
                <Box pt={matchesSM ? 0 : 10} pb={matchesSM ? 3 : 0}>
                  <Paper variant="outlined" className={classes.paper}>
                    <Image
                      src={content["logo3"]}
                      width={89}
                      height={48}
                      alt="third company logo that we worked with"
                    />
                  </Paper>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
