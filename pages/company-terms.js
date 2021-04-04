import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  Button,
  Grid,
  makeStyles,
  useTheme,
  Card,
  CardContent,
  CardActions,
  useMediaQuery,
} from "@material-ui/core";
import Link from "../src/Link";

const useStyles = makeStyles((theme) => ({
  button: {},
  cardRoot: {
    backgroundColor: theme.palette.primary.dark,
    paddingLeft: 10,
    paddingRight: 0,
    paddingTop: 30,
    paddingBottom: 30,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  cardRoot2: {
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    paddingRight: 0,
    paddingTop: 30,
    paddingBottom: 30,
    boxShadow: "#0f0f0f",
    border: "1px solid lightgray",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
    paddingBottom: 10,
  },
  button: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const CompanyTerms = () => {
  const theme = useTheme();
  const classes = useStyles();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const basicContent = {
    title: "Terms of Service",
    subtitle: "Updated on 04.08.2020",
    buttons: {
      firstButton: "REFER A FRIEND",
      secondButton: "APPLY NOW",
    },
    firstCard: {
      title: "Have a question?",
      text:
        "Not sure exactly what we’re looking for or just want clarification? We’d be happy to chat with you and clear things up for you. Anytime!",
      button: "CONTACT US",
    },
    secondCard: {
      title: "Don't see a job for you?",
      text:
        "Get free online programing tips and resources delivered directly to your inbox.",
      button: "SEE OTHER JOBS",
    },
  };

  const content = [
    {
      title: "Summary",
      text:
        "Here’s an overview of what each license allows for to make it easy to pick what you need:",
    },
    {
      title: "About the licence",
      text:
        "This is a license authorizing you, your client, or company if you are using Material-UI Store on their behalf, to license, download and use the CONTENT according to the terms below. No others (including independent contractors) may access your account or use the CONTENT licensed through your account without the express written permission of Material-UI Store. Please note that downloading this CONTENT constitutes your acceptance of this license and your agreement to be bound by the terms herein.",
    },
    {
      title: "Content licenses",
      text:
        "Material-UI SAS hereby grants you a non-exclusive, royalty-free, perpetual, non-transferable right to use, modify (except as expressly prohibited herein) and reproduce CONTENT worldwide, for the duration of protection of the licensed intellectual property rights, as expressly permitted by the applicable license and subject to the limitations set forth herein:",
    },
    {
      title: "Additional terms",
      text:
        "If Material-UI Store is required to collect indirect taxes (such as sales tax, value-added tax, goods and services tax) under the laws of your state or country of residence, you shall be liable for payment of any such indirect tax. Where Material-UI Store or you are required to collect or remit direct or indirect taxes, you may be required to self-assess said tax under the applicable laws of your country of residence. Non-transferable as used herein means that except as specifically provided in this license agreement, you may not sell, rent, loan, give, sublicense, or otherwise transfer to anyone, CONTENT, or the right to use CONTENT. You may, however, make a one-time transfer of CONTENT to a third party for the sole purpose of causing such a third party to print and/or manufacture your goods incorporating CONTENT subject to the terms and conditions herein. If you become aware that any social media website uses any CONTENT in a manner that exceeds your license hereunder, you agree to remove all derivative works incorporating CONTENT from such Social Media Site and to promptly notify Material-UI SAS of each such social media website's use. You agree to take all commercially reasonable steps to prevent third parties from duplicating any CONTENT. If you become aware of any unauthorized duplication of any CONTENT please notify us via email at support@material-ui.com.",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box pb={10} pt={4}>
        <Grid container direction="row" justify="space-between">
          <Grid item>
            <Box my={3} spacing={5}>
              <Typography className={classes.title} variant="h5">
                {basicContent.title}
              </Typography>
              <Typography color="textSecondary" variant="subtitle2">
                {basicContent.subtitle}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box my={2}>
          <Grid container style={{ backgroundColor: "lightgray" }}>
            <Typography style={{ padding: 0.7 }}></Typography>
          </Grid>
        </Box>

        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          justify="space-between"
        >
          <Grid item sm={12} md={7}>
            {content.map((a) => {
              return (
                <Box my={2} key={a.title}>
                  <Typography className={classes.title} variant="h4">
                    {a.title}
                  </Typography>
                  <Typography color="textPrimary">{a.text}</Typography>
                </Box>
              );
            })}
          </Grid>
          <Grid item sm={12} md={4}>
            <Box my={4}>
              <Card className={classes.cardRoot}>
                <CardContent>
                  <Typography
                    style={{ color: "#FFFFFF" }}
                    gutterBottom
                    variant="h6"
                    component="h6"
                  >
                    {basicContent.firstCard.title}
                  </Typography>
                  <Typography variant="subtitle1" style={{ color: "#F7F7F7" }}>
                    {basicContent.firstCard.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    className={classes.button}
                    disableRipple
                    disableFocusRipple
                    variant="contained"
                    href="/about"
                  >
                    {basicContent.firstCard.button}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CompanyTerms;
