import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ContentContext } from "../contents";

export default function ProductCard() {
const {onlyProducts} = useContext(ContentContext)
const datas = onlyProducts

const productList = onlyProducts.map(() => {

  if (onlyProducts === undefined) {
    return <p>Loading Products</p>
  }
  return datas.map((productsdatas) =>
<Card maxW='80%'>
        <a href={productsdatas.productUrl}>
        <CardBody>
          <Image
            src='https://picsum.photos/150'
            alt={productsdatas.productTitle}
            borderRadius='sm'
          />
          <Stack mt='1px' spacing='1px'>
            <Heading size='sm'>{productsdatas.productTitle}</Heading>
            <Text color='blue.600' fontSize='15px'>
             Rp.{productsdatas.productPrice}
            </Text>
          </Stack>
        </CardBody>
        </a>
      </Card>
    )
})
console.log(datas)

  return (
    <div style={{padding:"5px", display: "flex", flexDirection: "column", height: "100vh", justifyContent: "space-between", width: "100%", }}>
{productList}
    </div>
  );
}
