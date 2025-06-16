
import "swiper/css";
import "swiper/css/navigation";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import testimonials from "../data/Testimonials";

export default function TestimonialSlider() {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "100%",
        overflow: "hidden",
        px: 2,
        py: 5,
        minHeight: "90vh",
        bgcolor: "grey",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}
      >
        Grow your business with a suite of tools built for you
      </Typography>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
        loop
        spaceBetween={30}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <Grid
              container
              spacing={2}
              // alignItems="center"
              sx={{
                minHeight: "80vh",
                bgcolor: "common.white",
              }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    p: 3,
                    position: "relative",
                    backgroundColor: "#fff",
                  }}
                >
                  <Typography variant="h1" color="red">
                    “
                  </Typography>
                  <Typography variant="h6" fontWeight="400">
                    {item.quote}
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <img
                  src={item.img}
                  alt="Testimonial"
                  style={{
                    width: "100%",
                    height: "100%",
                    // maxHeight: 400,
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <IconButton
        className="swiper-prev"
        sx={{
          position: "absolute",
          top: "55%",
          left: 0,
          transform: "translateY(-50%)",
          bgcolor: "white",
          boxShadow: 2,
          zIndex: 10,
        }}
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        className="swiper-next"
        sx={{
          position: "absolute",
          top: "55%",
          right: 0,
          transform: "translateY(-50%)",
          bgcolor: "white",
          boxShadow: 2,
          zIndex: 10,
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
}
