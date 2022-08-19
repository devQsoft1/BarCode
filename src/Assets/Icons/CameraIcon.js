import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function CameraIcon(props) {
  return (
    <Svg
      {...props}
    >
     <Path fill="url(#pattern0)" d="M0 0H36V30H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_4_120"
            transform="matrix(.00833 0 0 .01 .083 0)"
          />
        </Pattern>
        <Image
          id="image0_4_120"
          width={100}
          height={100}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAACe1JREFUeF7tXWuQHFUVPmd2HrF4qAGS/LKiUyIl8RFf0YoxYFn8QCrmB8TiGRCrokSrNGSzfe8Ytpfgvb27yZZKiVhKjIakNGBZCuIvNb4wFRCVBCtYSdA/hghBoyjp2ek51MFeKwk73ff29Mz0zPb92+dx7/f16fs69zZCXjKFAGaqNnllICckYy9BTkhOSMYQyFh18gjJCckYAhmrTh4hOSHRCLiuWyiXy19ExGonsSKiI/V6vea6brOTfmxtZy5CPM/bRkQbbBuSUP4eIcT6hLodUcsUIVrrzQBwZ0da2tqoK4QY67LPlu4yQ4jneeuI6N5eAENEn5dSfqkXvs/2mQlClFKrEfFBABjqEShERLdIKb/dI///d9tzQrTWHwaARwCg0mMwpolotZSS69Kz0lNCtNbvBYCfAsB5PUPgTMcvIeIVjuP8ulf16RkhExMTbw6C4FcAsLBXjW/h92Sz2bysVqv9oRf1SkzI5OTkOc1m821EtJCIyjaVR8QhIhoHgDcY6AUA8CMAaBjIth69/M/nxwz7qb8h4jARTdv4RMQ6Ih4vFAoHhoeH/2OjOyNrTYjnee8AgDuI6EoAmJfEqY0OIn7KcZyv2+i0klVK3YqI3wDo+LbDS9wvNpvNO2u12pM2dTcmhIhwfHy8RkQ8Zi/YOEkqi4ibHce5K6n+bHpKqU2IyNHZjdLkNoyMjGhEJBOHxoRorScAYNjEaEoyXxZCfC4lW2eY6XZbEHHCcZwRk7YYERLOE35gYjAlmft931/bqXUmjnbP874JAJ9Iqb6xZrj/klJyXxhZYgnZs2fP0JEjR/4EABfHGUvp+SPz589fvW7dOqsO1dY3t+vo0aMP8tzDVjeh/NPVavXSNWvW8CClZYklRCm1EhH3JqyErdq+YrH4kaQjFFtno6Oj5Xnz5j0EAFfY6iaRJ6IPSSl5qN8WIWOIeEeSCljqHACAlUKIf1jqtSXuuu75lUrlZwDw7rYMmSmPCSHctgjxPG87r/OY+UsmhYjPBEGwvFarHUtmoT2trVu3Xjg9Pc1v7iXtWYrV3i6EuLUtQrTWewDgmggjDwgh1sRWZQ4IpIFVbB+ShpM5wMUrTUwDq5yQFN+WnJAUwUzD1JwkZHJyckGj0VhJRO8sFAoXE9ECADgnBPRFRHyu2Wz+GQB+DwC/kFI+lwbYJjbmDCFa69cj4g1EdCMAvMdicZDXj/Yj4s5Tp07tcl33nybAJpUZeEKYCADgNaDbUtjE+hcAfNX3/YlOETPQhCilbkTErQDAn6Q0y3EAuF0IsStNowM7yhofHz8vCIJ7EfG6tAE7yx5/xm4bGxt7MS0/Axch3GEHQfATInpXWiDF2PldsVi8cnh4+O9p+BsoQsLR0y8B4C1pgGNh42kiWpHGaGxgCOHPFBHt7WJknMEXET1eKpUua3eVeWAIUUrtStBncNLDfgB4BgBmPjk8AHgTAHB6UdEiSlh0pxDiJkudM8QHgpBwNPUdCyD+iIhT5XL54Q0bNrwwm55S6oJCofBRIrodAN5uahsRr3ccZ7ep/NlyfU9IOM84ZDi0fZ6z4uv1Ok/wjI4QhEcbePi8DQAuMAD6uO/7lySdpwwCIV448YvD6mCj0Vi1efNm/jxZl4mJiWoQBD8EgEvjlIlISSlrcXKzPe9rQsLo+AsAnB/T+IO+7y93XZdn2omL53mvJaLfGJBy0vf9xUmipK8J8Tzvs0T0lRiETwwNDS3btGnTkcRMnKaotV4cDgQuirG3Xghxj63PviZEa80jJB4NtSxEdJOUcqctMFHySqm1iLgjxuY+IcQHbP32LSHhJPDZmFXbJ33fX2ragZuCxx19pVJ5HACWRr0LpVJpwcaNG583tctyfUuI53lriOh7UY1FxLWO49gMh42x01rfDADfionOa6SUfIjIuPQtIUopPmUrI1raIKJFUsoTxmhYCPI8BRE5QqMmj1uEEFbpT31LiOd5DxDR1REYPiqEWG6BsbWo1vq3APD+VopEtEdK+XEbw31LiNaaFxFXRDR2lxDiBhswbGW11jwjvzZCb68Q4nIbu/1MyBNRnSpvTDmO09FMe601b37x0sqsBRGfcBzHKptxYAkBgG1CiI02b6etbNwFBXONkMhPFhHtllJebwuyjbzW+rsAENVHzJ1PVt6pt351epK5aDDsDUql0iLbiZlphOTD3rOQ0lpz8jYncbcsRHRzp25WUErdgojbYwi8WgjxfVOSWa5vO3Wl1EV8fDhm6eRAtVpdGnfiyAYwlg1PhPEZ9CURus1SqbTQNkL7lpDwbdoHAMu6HSWG0ZFoYtrvhHwGAO6OIeQFRFwmhDhsGwmzyW/ZsuWNxWKRV5kvjLH3aSGE9c1EfU2I67qvq1QqfzXYoHoKEZc7jnOyHVLCDapHAeCtUXYQkfN/Fyfx19eEhJ8tBQDCAOinAGCVEOKogeyrRMItXD6SHEkGKxLRXVJKvkjNuvQ9IWGUcJKDyQU0JziLpF6v7zTdI+EO/PDhw5zasxUR5xsgfCxMcki0Xdz3hIRRwjPy+w3AmhHh07pTRPRQq+X58BDnVeFaVdRo6gy3iHit4zg8g09UBoKQkBTeiOKzHzaFD+A/FibK8d4Gl0VhohyfIbG9nW6HEKKt08YDQ8jo6Oi5lUrl54jIQHa9ENH+er1+ueu6/23H+cAQwiCEk0U+K97tZOtD4Q0LbR99GyhCmJSpqan5vu8/DADWGR8J3+zHisXiVflxhAj0+Ka6RqPxtQR9ii0nO3zfX9/uZ+p0pwMXIac3zvO864hoynBIbEPGMUTc0M5oqpWzgSaEG83zlHK5PIyIvMwSl3IaR8pJIrq7UCjw9nBbs/45S8hMw8NlD56v8ND4fRZXDHKW/D5E5HnO7k4RMVPPgY+Q2d7EcNL3ysUBfKkaIvIhnZl7f/9NRHx45/SLAzqS2zVb3eYkIXHfpV4+zwnpJfqz+M4JyQmZFYH8ArMQlm5FyH3dvE41Yy99qtVBxPscx/lklNHYNCClVLcuwUy18Rk11v4lmEqpFYjImYZ5aRMBIvqglJLPObYssRESps3wFmq3V2HbbH7m1A9Vq9UlcWlNsYRws5RSqxCRjxXnJRkC/EulVVJKXsmOLEaEsAXP88aJaFOcwfz5qxEgIk9KaZLMYf4fjfB3FYKItlisJc11fgJE/MLIyMh46r+rmEHW8zz+q84oAPAPXV4z1xFv0X7+l9WPgyAYq9VqB20wMv5knW2UN5Kmp6eXFAqFRba/PLKpYD/J8i+Pms3ms/V6/UDSja/EhPQTUP1U15yQjLGVE5ITkjEEMladPEJyQjKGQMaqk0dITkjGEMhYdfIIyQnJGAIZq04eITkhGUMgY9XJIyQnJGMIZKw6eYTkhGQMgYxV52U/04GwZLNPJAAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  )
}

CameraIcon.defaultProps = {
  width: 36,
  height: 33,
  fill: '#000',
  viewBox: "0 0 36 30"
}

export default CameraIcon;
