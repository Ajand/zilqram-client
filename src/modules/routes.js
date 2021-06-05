import { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Row, Col, Container } from "react-grid-system";

import Header from "./Common/Header";

import ProfileHeader from "./Profile/ProfileHeader";

import ContentActions from "./Content/ContentActions";
import ContentMeta from "./Content/ContentMeta";
import ContentLikedBy from "./Content/ContentLikedBy";
import ContentPicture from "./Content/ContentPicture";
import ContentHeader from "./Content/ContentHeader";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    margin: theme.spacing(2),
  },
  section: {
    marginBottom: theme.spacing(2),
  },
  profileHeader: {
    position: "sticky",
    width: "100%",
    top: theme.spacing(2),
  },
}));

const Routes = () => {
  const classes = useStyles();

  

  return (
    <div>
      <Header />
      <div className={classes.content}>
        <Row styles={{ background: "#e5e5e5" }}>
          <Col md={3}>
            <div className={classes.profileHeader}>
              <ProfileHeader
                name="Dorsa Hosseini"
                username="@dorsa"
                isMe={true}
                followers={1123}
                followings={231}
                contents={321}
                nfts={42}
                avatar="/images/sample1.png"
              />
            </div>
          </Col>
          <Col md={9}>
            <Row>
              <Col md={6}>
                <div className={classes.section}>
                  <ContentMeta>
                    <ContentHeader
                      image="/images/sample1.png"
                      displayName="Dorsa Hosseini"
                      followed={false}
                    />
                    <ContentPicture src="/images/sample1.png" />
                    <ContentActions />
                    <ContentLikedBy likes={12} />
                  </ContentMeta>
                </div>
                <div className={classes.section}>
                  <ContentMeta>
                    <ContentHeader
                      image="/images/sample1.png"
                      displayName="Dorsa Hosseini"
                      followed={false}
                    />
                    <ContentPicture src="/images/sample1.png" />
                    <ContentActions />
                    <ContentLikedBy likes={12} />
                  </ContentMeta>
                </div>
                <div className={classes.section}>
                  <ContentMeta>
                    <ContentHeader
                      image="/images/sample1.png"
                      displayName="Dorsa Hosseini"
                      followed={false}
                    />
                    <ContentPicture src="/images/sample1.png" />
                    <ContentActions />
                    <ContentLikedBy likes={12} />
                  </ContentMeta>
                </div>
                <div className={classes.section}>
                  <ContentMeta>
                    <ContentHeader
                      image="/images/sample1.png"
                      displayName="Dorsa Hosseini"
                      followed={false}
                    />
                    <ContentPicture src="/images/sample1.png" />
                    <ContentActions />
                    <ContentLikedBy likes={12} />
                  </ContentMeta>
                </div>
              </Col>
              <Col md={6}>
                <div className={classes.section}>
                  <ContentMeta>
                    <ContentHeader
                      image="/images/sample2.jpg"
                      displayName="Dorsa Hosseini"
                      followed={false}
                    />
                    <ContentPicture src="/images/sample2.jpg" />
                    <ContentActions />
                    <ContentLikedBy likes={12} />
                  </ContentMeta>
                </div>
                <div className={classes.section}>
                  <ContentMeta>
                    <ContentHeader
                      image="/images/sample1.png"
                      displayName="Dorsa Hosseini"
                      followed={false}
                    />
                    <ContentPicture src="/images/sample1.png" />
                    <ContentActions />
                    <ContentLikedBy likes={12} />
                  </ContentMeta>
                </div>
                <div className={classes.section}>
                  <ContentMeta>
                    <ContentHeader
                      image="/images/sample1.png"
                      displayName="Dorsa Hosseini"
                      followed={false}
                    />
                    <ContentPicture src="/images/sample1.png" />
                    <ContentActions />
                    <ContentLikedBy likes={12} />
                  </ContentMeta>
                </div>
                <div className={classes.section}>
                  <ContentMeta>
                    <ContentHeader
                      image="/images/sample1.png"
                      displayName="Dorsa Hosseini"
                      followed={false}
                    />
                    <ContentPicture src="/images/sample1.png" />
                    <ContentActions />
                    <ContentLikedBy likes={12} />
                  </ContentMeta>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Routes;
