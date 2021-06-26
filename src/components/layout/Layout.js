
const sidebarWidth = 240; //px

const useStyles = makeStyles((theme) => {
    return {
      sidebar: {
        width: sidebarWidth
      },
      navbar: {
        width: `calc(100% - ${sidebarWidth}px)`
      }
    };
});