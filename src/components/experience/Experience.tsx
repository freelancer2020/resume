import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Info = styled(Box)(() => ({
  display: "flex",
}));

const Desc = styled(Box)(() => ({
  display: "flex",
}));

const CompanyImage = styled(Box)(() => ({
  width: "4rem",
  height: "4rem",
  marginRight: ".5rem",
}));

const MetaData = styled(Stack)(() => ({
  backgroundColor: "transparent",
}));

const Typo = styled(Typography)(() => ({
  color: "#fff",
  fontFamily: "Mono Semi"
}));

interface ExperienceProps {
  src: string;
  title: string;
  company: string;
  year: string;
  desc?: string;
  brand?: string;
  analyst?: boolean;
  end?: boolean;
}
const Experience: React.FC<ExperienceProps> = (props) => {
  return (
    <Stack spacing={2}>
      <Info>
        <CompanyImage>
          <img
            alt=""
            src={props.src}
            style={{ width: "100%", height: "100%", borderRadius: "5px" }}
          />
        </CompanyImage>
        <MetaData>
          <Typo
            variant="body1"
            children={props.title}
            sx={{ fontWeight: "bold" }}
          />
          <Typo variant="body1" children={props.company} />
          <Typo
            variant="body1"
            children={props.year}
            sx={{ color: "lightgray" }}
          />
          <Typo variant="body1" children="Poland" sx={{ color: "lightgray" }} />
        </MetaData>
      </Info>
      <Desc>
        <Typo variant="body1" children={props.desc} />
        <ul>
          {props.brand === "EY" && (
            <>
              <li>
                <Typo variant="body1">
                  Migrating a multi-page user experience into a single app,
                  improving customer engagement by 10%.
                </Typo>
              </li>

              <li>
                <Typo variant="body1">
                  Architected product tours with React for a new feature that
                  improved customer adoption by 20% leading to $1M in revenue.
                </Typo>
              </li>
              <li>
                <Typo variant="body1">
                  Partnered with data science to develop the frontend for a
                  product recommendation engine, that increased user time on a
                  page by 5 minutes.
                </Typo>
              </li>
              <li>
                <Typo variant="body1">
                  Creating new features, functionalities and capabilities on the
                  eCommerce sites using JavaScript, TypeScript ,GraphQL. And
                  Shopify stores.
                </Typo>
              </li>
              <li>
                <Typo variant="body1">
                  Implementing a mobile-first approach to existing website.
                </Typo>
              </li>
              <li>
                <Typo variant="body1">
                  Working directly with client stakeholders to develop technical
                  solutions for business cases.
                </Typo>
              </li>
              <li>
                <Typo variant="body1">
                  Maintenance of tests for React components, using React testing
                  library.
                </Typo>
              </li>
              <li>
                <Typo variant="body1">
                  Creating daily reports using lighthouse in chrome dev and
                  applying best solutions for critical rendering path (CRP).
                </Typo>
              </li>
            </>
          )}
          {props.brand === "Accenture" && !props.analyst && (
            <>
              <li>
                <Typo variant="body1">
                  Implementing websites, web applications, and landing pages
                  from concept through deployment.
                </Typo>
              </li>
              <li>
                <Typo variant="body1">
                  Designed and created a UI for a recommendation system
                  integrated with AI.
                </Typo>
              </li>
              <li>
                <Typo variant="body1">
                  Standardized all output with a new, responsive, mobile-first
                  approach and strategy.
                </Typo>
              </li>
              <li>
                <Typo variant="body1">
                  Assessed UX and UI designs for technical feasibility.
                </Typo>
              </li>
              <li>
                <Typo variant="body1">
                  Developing standard and ad hoc reports in graph format as
                  required.
                </Typo>
              </li>
              <li>
                <Typo variant="body1">
                  Collaborating with product team members to implement new
                  feature developments.
                </Typo>
              </li>
            </>
          )}
          {props.analyst && (
            <Typo variant="body1">
              Interpret data, analyze results using statiscal techniques and
              provide ongoing reports. Develop and implement databases, data
              collection systems, data analytics and other strategies that
              optimize statisical efficiency and quality. Identify, analyze and
              interpret data trendsor patterns in complex data sets.
            </Typo>
          )}
        </ul>
      </Desc>
      {!props.end && <hr></hr>}
    </Stack>
  );
};

export default Experience;
