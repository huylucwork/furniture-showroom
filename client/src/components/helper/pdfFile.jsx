import React from "react";
import { Page, Text, Image, Document, StyleSheet, Font, View } from "@react-pdf/renderer";

Font.register({ family: 'Cinzel Decorative', src: "http://fonts.gstatic.com/s/cinzeldecorative/v14/daaHSScvJGqLYhG8nNt8KPPswUAPniZoaelDQzCLlQXE.ttf" });
Font.register({ family: 'Poppins', src: "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9V1tvFP-KUEg.ttf" });
Font.register({ family: 'Poppins1', src: "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf" });

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 25,
    paddingHorizontal: 35,
  },
  // image: {
  //   marginLeft: "27.5%",
  //   marginBottom: 10,
  //   width: 30,
  //   height: 50,
  // },
  // title: {
  //   position: "absolute",
  //   top: 45,
  //   left: 282,
  //   fontSize: 18,
  //   color: "#473C38",
  //   fontFamily: 'Cinzel Decorative',
  // },
  orderType: {
    width: "100%",
    textAlign: "center",
    fontSize: 36,
    color: "#473C38",
    fontFamily: "Poppins",
    marginBottom: 10,
  },
  textCtn: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 15,
    fontFamily: "Poppins",
    width: "100%",
    justifyContent: "space-between",
  },
  header: {
    fontSize: 18,
    color: "#ad7252",
    width: 150,
  },
  totalPrice: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 15,
    fontFamily: "Poppins",
    width: "100%",
    justifyContent: "space-between",
    borderTopColor: "#ad7252",
    borderTopWidth: 1,
  },
  content: {
    width: 400,
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Poppins1",
    color: "#473C38",
  },
  total: {
    fontSize: 18,
    fontFamily: "Poppins1",
    color: "#473C38",
  },
  price: {
    fontSize: 22,
    color: "#ad7252",
    fontFamily: "Poppins1",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#473C38",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 20,
    fontFamily: "Poppins",
    width: "100%",
    backgroundColor: "#eae3d980",
    height: 70,
    border:'1px solid #ad7252',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  itemImage: {
    marginLeft: 7,
    width: 55,
    height: 55,
    backgroundColor: "#d9d9d9",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  nameCtn: {
    position: "absolute",
    left: 10,
    width: 100,
  },
  itemName: {
    fontSize: 18,
    color: "#ad7252",
    width: "100%",
  },
  itemCat: {
    width: "100%",
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Poppins1",
    color: "#473C38",
  },
  itemAmount: {
    position: "absolute",
    top: 10,
    right: 100,
    width: 70,
    height: 55,
    fontSize: 16,
    color: "#473C38",
    textAlign: "center",
    fontFamily: "Poppins1",
  },
  itemPrice: {
    position: "absolute",
    top: 10,
    right: 20,
    width: 30,
    height: 55,
    fontSize: 16,
    color: "#ad7252",
    textAlign: "right",
    fontFamily: "Poppins1",
  },
  colorL: {
    position: "absolute",
    left: 170,
    width: 100,
  },
  wH: {
    position: "absolute",
    left: 305,
    width: 100,
  },
  amountWeight: {
    position: "absolute",
    right: 20,
    width: 100,
  },
  purchaseDetail: {
    width: "100%",
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Poppins1",
    color: "#473C38",
  },
});

const RenderItemPurchase = () => {
  let list = []
  list.push(
    <>
      <View style={styles.textCtn} key={-1}>
        <Text style={styles.header}>Order:</Text>
        <Text style={styles.content}>PO40000087</Text>
      </View>
      <View style={styles.textCtn} key={-2}>
        <Text style={styles.header}>Date:</Text>
        <Text style={styles.content}>02-09-2022</Text>
      </View>
      <View style={styles.textCtn} key={-3}>
        <Text style={styles.header}>Company:</Text>
        <Text style={styles.content}>XXX</Text>
      </View>
      <View style={styles.textCtn} key={-4}>
        <Text style={styles.header}>Amount:</Text>
        <Text style={styles.content}>06</Text>
      </View>
      <View style={styles.textCtn} key={-5}>
        <Text style={styles.header}>Move Code:</Text>
        <Text style={styles.content}>SM10000000001</Text>
      </View>
      <View style={styles.textCtn} key={-6}>
        <Text style={styles.header}>Warehouse:</Text>
        <Text style={styles.content}>340 Madison Avenue Sixth Floor New York, NY 10173 USA</Text>
      </View>
    </>
  )
  for(let i=0; i<30; i++)
    list.push(
      <View style={styles.item} wrap={false} key={i}>
        {/* <Image style={styles.itemImage} src="#"/> */}
        <View style={styles.nameCtn}>
          <Text style={styles.itemName}>Item X</Text>
          <Text style={styles.itemCat}>Category</Text>
        </View>
        <View style={styles.colorL}>
          <Text style={styles.purchaseDetail}>Color: White</Text>
          <Text style={styles.purchaseDetail}>l: 02xx</Text>
        </View>
        <View style={styles.wH}>
          <Text style={styles.purchaseDetail}>w: 02xx</Text>
          <Text style={styles.purchaseDetail}>h: 02xx</Text>
        </View>
        <View style={styles.amountWeight}>
          <Text style={styles.purchaseDetail}>Amount: 01</Text>
          <Text style={styles.purchaseDetail}>Weight: 10kg</Text>
        </View>
      </View>
    )
  return list
}

const RenderItemHistorySale = () => {
  let list = []
  list.push(
    <>
      <View style={styles.textCtn} key={-1}>
        <Text style={styles.header}>Order:</Text>
        <Text style={styles.content}>SO40000087</Text>
      </View>
      <View style={styles.textCtn} key={-2}>
        <Text style={styles.header}>Date:</Text>
        <Text style={styles.content}>02-09-2022</Text>
      </View>
      <View style={styles.textCtn} key={-3}>
        <Text style={styles.header}>User name:</Text>
        <Text style={styles.content}>anhbo123</Text>
      </View>
      <View style={styles.textCtn} key={-4}>
        <Text style={styles.header}>Name:</Text>
        <Text style={styles.content}>anhbodantruong</Text>
      </View>
      <View style={styles.textCtn} key={-5}>
        <Text style={styles.header}>Email:</Text>
        <Text style={styles.content}>bolaanh@gmail.com</Text>
      </View>
      <View style={styles.textCtn} key={-6}>
        <Text style={styles.header}>Phone:</Text>
        <Text style={styles.content}>0938608456</Text>
      </View>
      <View style={styles.textCtn} key={-7}>
        <Text style={styles.header}>Address:</Text>
        <Text style={styles.content}>340 Madison Avenue Sixth Floor New York, NY 10173 USA</Text>
      </View>
    </>
  )
  for(let i=0; i<30; i++)
    list.push(
      <View style={styles.item} wrap={false} key={i}>
        {/* <Image style={styles.itemImage} src="#"/> */}
        <View style={styles.nameCtn}>
          <Text style={styles.itemName}>Item X</Text>
          <Text style={styles.itemCat}>Category</Text>
        </View>
        <Text style={styles.itemAmount}>Amount 1</Text>
        <Text style={styles.itemPrice}>Price $123</Text>
      </View>
    )
  return list
}

export default function PDFFile ( {type} ) {

  return (
    <Document>
      <Page style={styles.body}>
        {/* <Image style={styles.image} src="https://ik.imagekit.io/gyeviu0zo/logo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1670737858067"/>
        <Text style={styles.title}>Hifurdez</Text> */}
        {type === "Sale" && <Text style={styles.orderType}>{`${type} Order`}</Text>}
        {type === "Purchase" && <Text style={styles.orderType}>{`${type} Order`}</Text>}
        {type === "Purchase" ? <RenderItemPurchase /> : <RenderItemHistorySale />}
        <View style={styles.totalPrice}>
          <Text style={styles.total}>Total:</Text>
          <Text style={styles.price}>$100000</Text>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  )
}