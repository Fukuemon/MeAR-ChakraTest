import { Box, Flex } from "./components";
import PostCard from "./components/Card/PostCard";
import { DynamicModelViewer } from "./components/ModelViewer/DynamicModel";

const post = {
  menu_item_model: "/4ステーキコンボ.glb",
  author: "ユーザー名",
  created_on: "YYYY-MM-DD",
  restaurant: "レストラン名",
  menu_item: "ステーキコンボ",
};

export default function Home() {
  return (
    <Flex p={4} alignItems="center" justifyContent="center">
      <PostCard
        menu_item_model={post.menu_item_model}
        author={post.author}
        created_on={post.created_on}
        restaurant={post.restaurant}
        menu_item={post.menu_item}
      />
    </Flex>
  );
}
